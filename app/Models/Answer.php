<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $table = "answer";
    protected $primaryKey = "answer_id";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["answer_text", "answer_is_correct", "question_id"];
}
