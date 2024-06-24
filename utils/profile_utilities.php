<?php

use App\Models\Category;
use App\Models\UserAnswer;

class ProfileUtilities
{
    public static function GetCorrectAnswerPercentPerCategory(string $user_id): array
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
                Category::where("category_id", $i)->category_name => ($correct_row_count / $all_row_count) * 100
            ]);
        }

        return $data_array;
    }

    public static function GetCorrectAnswerNumberPerCategory(string $userid): array
    {
        $data_array = [];

        for ($i = 1; $i <= 5; $i++) {
            $correct_row_count = UserAnswer::where("user_id", $userid)->where("is_correct", true)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            array_push($data_array, [
                Category::where("category_id", $i)->category_name => $correct_row_count
            ]);
        }

        return $data_array;
    }

    public static function GetTotalAnswerNumberPerCategory(string $user_id): array
    {
        $data_array = [];

        for ($i = 1; $i <= 5; $i++) {
            $all_row_count = UserAnswer::where("user_id", $user_id)->whereHas('question', function ($query) use ($i) {
                $query->where('category_id', $i);
            })->count();

            array_push($data_array, [
                Category::where("category_id", $i)->category_name => $all_row_count
            ]);
        }

        return $data_array;
    }
}

