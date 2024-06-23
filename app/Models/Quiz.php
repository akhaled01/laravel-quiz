<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $table = "quiz";
    protected $primaryKey = "quiz_id";
    protected $keyType = 'string';
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["quiz_correct_num", "quiz_xp_gained", "user_id"];
}
