<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table("category")->insert([
            ['category_name' => "Art"],
            ['category_name' => "Science"],
            ['category_name' => "Geography"],
            ['category_name' => "History"],
            ['category_name' => "Sports"],
        ]);
    }
}
