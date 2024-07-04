<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Support\Facades\DB;

class LeaderboardController extends Controller
{
    public function get()
    {
        $toppers = DB::table('user')->orderBy("user_total_xp", 'desc')->limit(10)->get();
        $data_array = [];

        for ($i = 0; $i < count($toppers); $i++) {
            $topper = $toppers[$i];

            $correctly_answered_question_count = UserAnswer::where("user_id", $topper->user_id)
                ->where("is_correct", true)->count();

            array_push($data_array, [
                'position' => $i + 1,
                'username' => $topper->user_name,
                'xp' => $topper->user_total_xp,
                'correct_count' => $correctly_answered_question_count
            ]);
        }

        return response()->json($data_array, 200);
    }
}
