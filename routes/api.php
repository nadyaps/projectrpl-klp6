<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArtikelController;

Route::middleware('auth:sanctum')->group(function() {
  Route::post('/logout', [AuthController::class, 'logout']);
    
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/artikel', [ArtikelController::class, 'artikel']);

// require __DIR__.'/web.php';