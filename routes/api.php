<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Http\Middleware\corsHandle;
use Illuminate\Support\Facades\Route;

Route::post("/register", [AuthController::class, 'signup'])->middleware(corsHandle::class);
Route::post("/auth", [AuthController::class, 'login'])->middleware(corsHandle::class);
Route::get("/profile", [ProfileController::class, 'get'])->middleware(corsHandle::class);
Route::get("/quiz/new", [QuizController::class, 'new'])->middleware(corsHandle::class);
Route::post("/quiz/save", [QuizController::class, 'save'])->middleware(corsHandle::class);
Route::get("/quiz/get", [QuizController::class, 'get_all'])->middleware(corsHandle::class);
Route::get("/leaderboard", [LeaderboardController::class, 'get'])->middleware(corsHandle::class);
