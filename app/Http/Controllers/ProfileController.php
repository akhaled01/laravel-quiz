<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\UserAnswer;

class ProfileController extends Controller
{
    private function GetCorrectAnswerPercentPerCategory(string $user_id): array
    {
        $data_array = [];

        for ($i = 1; $i <= 5; $i++) {
            $all_row_count = UserAnswer::where("user_id", $user_id)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            $correct_row_count = UserAnswer::where("user_id", $user_id)->where("is_correct", true)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            array_push($data_array, [
                Category::where("category_id", $i)->first()->category_name => $all_row_count > 0 ? ($correct_row_count / $all_row_count) * 100 : 0
            ]);
        }

        return $data_array;
    }

    private static function GetCorrectAnswerNumberPerCategory(string $userid): array
    {
        $data_array = [];

        for ($i = 1; $i <= 5; $i++) {
            $correct_row_count = UserAnswer::where("user_id", $userid)->where("is_correct", true)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            array_push($data_array, [
                Category::where("category_id", $i)->first()->category_name => $correct_row_count
            ]);
        }

        return $data_array;
    }

    private static function GetTotalAnswerNumberPerCategory(string $user_id): array
    {
        $data_array = [];

        for ($i = 1; $i <= 5; $i++) {
            $all_row_count = UserAnswer::where("user_id", $user_id)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            array_push($data_array, [
                Category::where("category_id", $i)->first()->category_name => $all_row_count
            ]);
        }

        return $data_array;
    }

    public function get(Request $req)
    {
        $user = User::where("user_id", $req->user_id)->first();
        if (!$user) {
            return response()->json(['error' => 'uuid not found'], 401);
        }

        $user_xp = $user->user_total_xp;
        $user_name = $user->user_name;
        $user_email = $user->user_email;

        $user_rank = "";
        if ($user_xp < 1500) {
            $user_rank = "Quiz Apprentice";
        } else if ($user_xp >= 1500 && $user_xp < 5000) {
            $user_rank = "Average Quizer";
        } else if ($user_xp >= 5000 && $user_xp < 10000) {
            $user_rank = "Epic Quizer";
        } else if ($user_xp >= 10000) {
            $user_rank = "Epic Quizer";
        }

        $correct_answer_percentages = $this->GetCorrectAnswerPercentPerCategory($req->user_id);
        $correct_answer_numbers = $this->GetCorrectAnswerNumberPerCategory($req->user_id);
        $total_answer_numbers = $this->GetTotalAnswerNumberPerCategory($req->user_id);

        return response()->json([
            "username" => $user_name,
            "email" => $user_email,
            "rank" => $user_rank,
            "correct_percentages" => $correct_answer_percentages,
            "correct_numbers" => $correct_answer_numbers,
            "total_numbers" => $total_answer_numbers
        ], 200);
    }
}
