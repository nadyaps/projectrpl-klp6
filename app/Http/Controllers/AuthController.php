<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
// use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
// use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function signup(RegisterRequest $request)
  {
    $user = User::create([
      'name' => $request->name,
      'username' => $request->username,
      'email' => $request->email,
      'password' => $request->password,
      'phone' => $request->phone,
      'address' => $request->address,
    ]);

    $notification = array(
      'message' => 'Registrasi Berhasil',
      'alert-type' => 'success'
    );
    return redirect()->back()->with($notification);

    $token = $user->createToken('main')->plainTextToken;

    return response([
      'token' => $token,
      'user' => $user,
    ]);

  }

  public function login(LoginRequest $request)
  {
      // Validasi masukan
      $credentials = $request->validate([
          'email' => 'required|email',
          'password' => 'required',
      ]);
  
      $remember = $request->boolean('remember');
  
      // Coba melakukan login
      if (!Auth::attempt($credentials, $remember)) {
          // Jika login gagal, kembalikan pesan error
          return response()->json(['error' => 'The provided credentials are incorrect.'], 500);
      }
  
      // Jika login berhasil, dapatkan user yang terautentikasi
      $user = Auth::user();
      
      // Buat token untuk otorisasi
      $token = $user->createToken('main')->plainTextToken;
  
      // Kembalikan token dan informasi pengguna
      return response()->json([
          'token' => $token,
          'user' => $user,  
      ]);
  }
  
  public function logout(Request $request)
  {
    $user = $request->user();
        
        if ($user) {
            $user->tokens()->delete();
            
            return response()->json(['success' => true]);
        }
  }

  
}
