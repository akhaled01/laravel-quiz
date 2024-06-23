<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCategoryScore extends Model
{
    protected $table = "user_category_score";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["user_id", "category_id", "score"];
}
