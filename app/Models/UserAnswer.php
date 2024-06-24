<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    protected $table = "user_answer";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["user_id", "question_id", "is_correct"];
}
