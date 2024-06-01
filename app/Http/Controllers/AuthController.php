<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  public function signup(RegisterRequest $request)
  {
    $user = User::create([
      'name' => $request->name,
      'username' => $request->username,
      'email' => $request->email,
      // 'password' => Hash::make($request->password),
      'password' => $request->password,
      'phone' => $request->phone,
      'address' => $request->address,
    ]);
    $token = $user->createToken('main')->plainTextToken;

    return response([
      'token' => $token,
      'user' => $user,
    ]);
  }

  public function login(LoginRequest $request)
  {
    $credentials = $request->validate();
    $remember = $credentials['remember'] ?? false;
    unset($credentials['remember']);

    if (!Auth::attempt($credentials, $remember)) {
      return response([
        'error' => 'The provided credientials are not correct',
      ], 422);
    }
    $user = Auth::user();
    $token = $user->createToken('main')->plainTextToken;
  }
  public function logout(Request $request)
  {
    $user = Auth::user();
    $user->currentAccessToken()->delete();

    return response([
      'success' => 'true',
    ]);
  }
}
