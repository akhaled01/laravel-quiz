<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\corsHandle;
use Illuminate\Support\Facades\Route;

Route::post("/register", [AuthController::class, 'signup'])->middleware(corsHandle::class);
Route::post("/auth", [AuthController::class, 'login'])->middleware(corsHandle::class);
Route::get("/profile", [ProfileController::class, 'get'])->middleware(corsHandle::class);
