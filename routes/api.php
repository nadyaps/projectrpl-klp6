<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\PemesananController;

//customer
Route::middleware('auth:sanctum')->group(function() {
  Route::post('/logout', [AuthController::class, 'logout']);
});

//guest dan customer
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/artikel', [ArtikelController::class, 'index']);
Route::get('/artikellist', [ArtikelController::class, 'artikelList']);
Route::get('/artikel/{id}', [ArtikelController::class, 'show']);

Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/layanan/{id}', [LayananController::class, 'show']);
Route::get('/layananlist', [LayananController::class, 'layananList']);

Route::post('/pemesanan/{id}', [PemesananController::class, 'store']);

// require __DIR__.'/web.php';