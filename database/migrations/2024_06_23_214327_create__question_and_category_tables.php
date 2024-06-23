<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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

        Schema::create('question', function (Blueprint $table) {
            $table->id("question_id");
            $table->string("question_content");
            $table->integer("question_xp");
            $table->unsignedBigInteger("category_id");

            $table->foreign("category_id")->references("category_id")->on("category");
        });
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
