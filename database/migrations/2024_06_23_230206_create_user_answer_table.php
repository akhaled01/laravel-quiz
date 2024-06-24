<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_answer', function (Blueprint $table) {
            $table->string("user_id");
            $table->integer("question_id");
            $table->boolean("is_correct");

            $table->foreign("user_id")->references("user_id")->on("user");
            $table->foreign("question_id")->references("question_id")->on("question");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_answer');
    }
};
