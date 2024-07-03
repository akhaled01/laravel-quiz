<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Category;
use App\Models\Quiz;
use App\Models\Question;
use App\Models\User;
use App\Models\UserAnswer;
use App\Models\UserCategoryScore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class QuizController extends Controller
{
    /**
     * Handler that generates a new Quiz
     * A Quiz is a group of 5 questions
     *
     * The method prioritizes unanswered questions from each category by referencing
     * `user_answers` table. If the user answers all questions for a category,
     * then the method selects any one
     */
    public function new(Request $req, string $id)
    {
        Log::info("recv new quiz request");
        $data_array = [];
        $userId = $id;
        $categories = Category::all();

        foreach ($categories as $category) {
            Log::info($category->category_id . " " . $category->category_name);
            // ensure question has not been answered by that user before
            $question = Question::leftJoin('user_answer', function ($join) use ($userId) {
                $join->on('question.question_id', '=', 'user_answer.question_id')
                    ->where('user_answer.user_id', '=', $userId);
            })
                ->whereNull('user_answer.question_id')
                ->where('question.category_id', '=', $category->category_id)
                ->select('question.*')
                ->first();

            if (!$question) {
                // Get any question from the category if no unanswered question is found
                $question = Question::where('category_id', $category->category_id)->first();
            }

            Log::info([
                $question->question_id .
                    $question->question_content .
                    $category->category_name .
                    $question->question_xp .
                    Answer::where("question_id", $question->question_id)->get()
            ]);

            array_push($data_array, [
                "question_id" => $question->question_id,
                "question_content" => $question->question_content,
                "question_category" => $category->category_name,
                "question_xp" => $question->question_xp,
                "question_possible_answers" => Answer::where("question_id", $question->question_id)->get()
            ]);
        }

        return response()->json($data_array, 200);
    }

    /**
     * saves quiz data to the db
     */
    public function save(Request $req)
    {
        $user = User::where('user_id', $req->user_id)->first();
        $result_array = [
            'correct_num' => $req->correct_num,
            'cat_answered' => []
        ];

        if (!$user) {
            Log::alert("user " . $req->user_id . "not there");
            return response()->json(['error' => 'User not found'], 404);
        }

        // Create the quiz record
        Quiz::create([
            'quiz_correct_num' => $req->correct_num,
            'quiz_xp_gained' => $req->total_xp_gained,
            'user_id' => $user->getAttribute('user_id')
        ]);

        foreach ($req->question_details as $answered_question) {
            $question_id = $answered_question['question_id'];
            $is_answered = $answered_question['is_answered'];

            $question_object = Question::where('question_id', $question_id)->first();

            if (!$question_object) {
                Log::warning("Question with ID $question_id not found");
                continue;
            }

            array_push($result_array["cat_answered"], [
                'category' => Category::where("category_id", $question_object->category_id)->first()->category_name,
                'is_answered' => $is_answered
            ]);

            // Update scores per category if the question is answered correctly
            if ($is_answered) {
                $score_record = UserCategoryScore::where('user_id', $req->user_id)
                    ->where('category_id', $question_object->category_id)
                    ->first();

                if ($score_record) {
                    $old_score = $score_record->score;
                    $new_score = $old_score + $question_object->question_xp;
                    Log::info("Updating score for user_id {$req->user_id}, category_id {$question_object->category_id}. Old score: $old_score, New score: $new_score");

                    UserCategoryScore::where("user_id", $user->getAttribute('user_id'))
                        ->where("category_id", $question_object->category_id)
                        ->update(['score' => $new_score]);
                } else {
                    Log::warning("UserCategoryScore record not found for user_id {$req->user_id} and category_id {$question_object->category_id}");
                }
            }

            // Create the user answer record
            UserAnswer::create([
                'user_id' => $req->user_id,
                'question_id' => $question_id,
                'is_correct' => $is_answered
            ]);
        }

        // Update the user's total XP
        $new_total_xp = $user->user_total_xp + $req->total_xp_gained;
        Log::info("Updating user total XP for user_id {$req->user_id}. Old XP: {$user->user_total_xp}, New XP: $new_total_xp");
        $user->update(['user_total_xp' => $new_total_xp]);

        return response([
            'success' => 'Quiz data saved successfully!',
            'results' => $result_array
        ], 201);
    }

    public function get_all(Request $req, string $id)
    {
        $user_id = $id;
        $quizzes = Quiz::where("user_id", $user_id)->get();

        return response()->json([
            "quizzes" => $quizzes
        ], 200);
    }
}
