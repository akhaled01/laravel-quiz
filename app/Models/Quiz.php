<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Quiz extends Model
{
    protected $table = "quiz";
    protected $primaryKey = "quiz_id";
    protected $keyType = 'string';
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["quiz_correct_num", "quiz_xp_gained", "user_id"];

    // need to gen uuid for some dumbass reason lmao
    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }
}
