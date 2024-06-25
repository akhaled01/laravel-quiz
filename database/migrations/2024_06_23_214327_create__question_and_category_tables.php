<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('category', function (Blueprint $table) {
            $table->id("category_id");
            $table->string("category_name");
        });

        DB::table("category")->insert([
            ['category_name' => "Art"],
            ['category_name' => "Science"],
            ['category_name' => "Geography"],
            ['category_name' => "History"],
            ['category_name' => "Sports"],
        ]);

        Schema::create('question', function (Blueprint $table) {
            $table->id("question_id");
            $table->string("question_content");
            $table->integer("question_xp");
            $table->unsignedBigInteger("category_id");

            $table->foreign("category_id")->references("category_id")->on("category");
        });

        $questions = [
            ['question_content' => 'Who wrote "To be, or not to be, that is the question"?', 'question_xp' => 25, 'category_id' => 1], // Art
            ['question_content' => 'According to Guinness world records, what is the best selling book of all time?', 'question_xp' => 25, 'category_id' => 1], // Art
            ['question_content' => 'What type of glass is used in movies and TV special effects to break, without harming the actors?', 'question_xp' => 25, 'category_id' => 1], // Art
            ['question_content' => 'Van Gogh\'s "The Starry Night" illustrates the view from the window of which building', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'Which composer had his heart buried in Poland and his body buried in France?', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'Who is Stefani Joanne Angelina Germanotta?', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'Which painter continued his work despite having crippling arthritis?', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'La Giaconda is better known as what?', 'question_xp' => 25, 'category_id' => 1], // Art
            ['question_content' => 'Tom Hanks won two consecutive Oscars in 1994 and 1995. Which films were they for?', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'Who played the lead role in the 2001 movie Lara Croft: Tomb Raider?', 'question_xp' => 25, 'category_id' => 1], // Art
            ['question_content' => 'Which singer has the most UK Number One singles ever?', 'question_xp' => 75, 'category_id' => 1], // Art
            ['question_content' => 'What was Britney Spears\' first single called?', 'question_xp' => 75, 'category_id' => 1], // Art

            ['question_content' => 'Which part of the body has the thinnest skin?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'which of these chemicals is often found in nail polish remover?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'Where in the human body is the pharynx?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'How many teeth does an adult human have?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'Which creature has the longest pregnancy?', 'question_xp' => 75, 'category_id' => 2], // Science
            ['question_content' => 'Which animal has more than one heart?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'Who was the first woman to win the Nobel Prize?', 'question_xp' => 75, 'category_id' => 2], // Science
            ['question_content' => 'Where is the smallest bone of the human body?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'What are phosphenes?', 'question_xp' => 75, 'category_id' => 2], // Science
            ['question_content' => 'Which plant, known as "the bearer of hope", survived the atomic bomb of Hiroshima in 1945?', 'question_xp' => 75, 'category_id' => 2], // Science
            ['question_content' => 'Which hormone causes cells to absorb glucose from the blood?', 'question_xp' => 25, 'category_id' => 2], // Science
            ['question_content' => 'Which marine animal is the only male creature that reproduces through the female\'s ovulation?', 'question_xp' => 75, 'category_id' => 2], // Science

            ['question_content' => 'What is the highest mountain in the world?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'How many islands belong to the Philippines?', 'question_xp' => 75, 'category_id' => 3], // Geography
            ['question_content' => 'Which one of these countries has more than one capital?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'Where is the largest pyramid in the world?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'How did the Marshall Islands get its name?', 'question_xp' => 75, 'category_id' => 3], // Geography
            ['question_content' => 'What\'s the name of the second biggest waterfall in the world, located in South Africa?', 'question_xp' => 75, 'category_id' => 3], // Geography
            ['question_content' => 'In which city is located the statue "Christ the Redeemer"?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'Which city is the capital of Australia?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'What is the smallest state in the world?', 'question_xp' => 25, 'category_id' => 3], // Geography
            ['question_content' => 'Which Turkish city has the name of a cartoon character?', 'question_xp' => 75, 'category_id' => 3], // Geography
            ['question_content' => 'Which country did once have the name Rhodesia?', 'question_xp' => 75, 'category_id' => 3], // Geography
            ['question_content' => 'What is the largest state of the United States?', 'question_xp' => 75, 'category_id' => 3], // Geography

            ['question_content' => 'World War I began in which year?', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'Adolf Hitler was born in which country?', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'John F. Kennedy was assassinated in:', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'Who fought in the war of 1812?', 'question_xp' => 75, 'category_id' => 4], // History
            ['question_content' => 'Which general famously stated "I shall return?"', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'The Magna Carta was published by the King of which country?', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'The first successful printing press was developed by this man.', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'The disease that ravaged and killed a third of Europe\'s population in the 14th century is known as:', 'question_xp' => 75, 'category_id' => 4], // History
            ['question_content' => 'The Hundred Years War was fought between what two countries?', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'Which man wrote a document known as the 95 Theses?', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'What famous 5th century A.D conqueror was known as "The Scourge of God?"', 'question_xp' => 25, 'category_id' => 4], // History
            ['question_content' => 'What famous rifle is known in America as "The Gun that Won the West?"', 'question_xp' => 75, 'category_id' => 4], // History

            ['question_content' => 'In which year did Maradona score a goal with his hand?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'How many minutes is a rugby match?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'In which country were the first Olympic Games held?', 'question_xp' => 25, 'category_id' => 5], // Sports
            ['question_content' => 'How many matches did Mohammed Ali lose in his career?', 'question_xp' => 75, 'category_id' => 5],
            ['question_content' => 'Which cyclist was also called "The Cannibal"?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'In which country is the Interlagos F1-circuit?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'What is the name of the Barcelona FC football stadium?', 'question_xp' => 25, 'category_id' => 5], // Sports
            ['question_content' => 'Which popular fitness method was invented by a German?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'How many times has Michael Schumacher been a Formula 1 champion?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'What is the national sport in Japan?', 'question_xp' => 25, 'category_id' => 5], // Sports
            ['question_content' => 'With which car did Fernando Alonso won his first title in Formula 1?', 'question_xp' => 75, 'category_id' => 5], // Sports
            ['question_content' => 'Which snooker player is nicknamed as "The Rocket"?', 'question_xp' => 25, 'category_id' => 5], // Sports
        ];

        DB::table("question")->insert($questions);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question');
        Schema::dropIfExists('category');
    }
};
