<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasUuids;

    protected $table = "user";
    protected $keyType = 'string';
    protected $primaryKey = "user_id";
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = ["user_name", "user_email", "user_password", "user_total_xp"];
    public $incrementing = false;
}
