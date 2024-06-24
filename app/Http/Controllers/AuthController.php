<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use App\Models\UserCategoryScore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    /**
     * Signup handler for the user
     */
    public function signup(Request $req)
    {
        try {
            $this->validate($req, [
                'user_name' => 'required|string|max:10',
                'user_email' => 'required|string|email|max:255|unique:user',
                'user_password' => 'required|string|min:6',
            ]);

            $user = User::create([
                'user_name' => $req->user_name,
                'user_email' => $req->user_email,
                'user_password' => Hash::make($req->user_password),
            ]);

            $cats = Category::all();

            // create user_category_score records
            foreach ($cats as $cat) {
                UserCategoryScore::create([
                    "user_id" => $user->user_id,
                    "category_id" => $cat->getAttribute("category_id"),
                    "score" => 0
                ]);
            }

            return response([
                "success" => sprintf("user %s created successfully", $user->getAttribute("user_name"))
            ], 201);
        } catch (\Exception $e) {
            Log::error('Signup error: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred during signup'], 500);
        }
    }

    /**
     * login handler for the user
     */
    public function login(Request $req)
    {
        $this->validate($req, [
            'user_email' => 'required|string|email',
            'user_password' => 'required|string|min:6',
        ]);

        $user = User::where("user_email", $req->user_email)->first();

        if (!$user) {
            return response()->json(['error' => 'user with that email not found'], 404);
        }

        if (Hash::check($req->user_password, $user->getAttribute("user_password"))) {
            return response()->json([
                'token' => bin2hex(random_bytes(20)),
                'user_id' => $user->getAttribute("user_id")
            ], 200);
        } else {
            return response()->json(['error' => 'incorrect password'], 401);
        }
    }
}
