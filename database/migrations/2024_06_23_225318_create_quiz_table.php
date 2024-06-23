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
        Schema::create('quiz', function (Blueprint $table) {
            $table->uuid('quiz_id');
            $table->integer('quiz_correct_num');
            $table->integer('quiz_xp_gained');
            $table->string("user_id");

            $table->foreign("user_id")->references("user_id")->on("user");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz');
    }
};
