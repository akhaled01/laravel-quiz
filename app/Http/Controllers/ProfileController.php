<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use ProfileUtilities;

class ProfileController extends Controller
{
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
            $user_rank = "Quiz Aprentice";
        } else if ($user_xp >= 1500 && $user_xp < 5000) {
            $user_rank = "Average Quizer";
        } else if ($user_xp >= 5000 && $user_xp < 10000) {
            $user_rank = "Epic Quizer";
        } else if ($user_xp >= 10000) {
            $user_rank = "Epic Quizer";
        }

        $correct_answer_percentages = ProfileUtilities::GetCorrectAnswerPercentPerCategory($req->user_id);
        $correct_answer_numbers = ProfileUtilities::GetCorrectAnswerNumberPerCategory($req->user_id);
        $total_answer_numbers = ProfileUtilities::GetTotalAnswerNumberPerCategory($req->user_id);

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
