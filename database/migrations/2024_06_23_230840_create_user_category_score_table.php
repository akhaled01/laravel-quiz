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
        Schema::create('user_category_score', function (Blueprint $table) {
            $table->string("user_id");
            $table->integer("category_id");
            $table->integer("score");

            $table->foreign("user_id")->references("user_id")->on("user")->cascadeOnDelete();
            $table->foreign("category_id")->references("category_id")->on("category")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_category_score');
    }
};
