<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = "question";
    protected $primaryKey = "question_id";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["question_content", "question_xp", "category_id"];

    public function UserAnswer()
    {
        return $this->hasMany(UserAnswer::class, "question_id", "question_id");
    }
}
