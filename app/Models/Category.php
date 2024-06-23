<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = "category";
    protected $primaryKey = "category_id";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["category_name"];
}
