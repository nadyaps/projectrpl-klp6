<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Admin Route
Route::middleware(['auth'])->group(function(){
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.index');
    Route::get('/admin/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');

    Route::get('/admin/profile', [AdminController::class, 'AdminProfile'])->name('admin.profile');
    Route::post('/admin/profile/store' , [AdminController::class, 'AdminProfileStore'])->name('admin.profile.store');
    Route::get('/admin/change-password', [AdminController::class, 'AdminChangePassword'])->name('admin.change.password');
    Route::post('/admin/update-password', [AdminController::class, 'AdminUpdatePassword'])->name('admin.update.password');

    Route::get('/admin/user', [AdminController::class, 'AdminUser'])->name('admin.user');
    Route::get('/admin/user/{id}', [AdminController::class, 'AdminViewUser'])->name('view.user');
    Route::get('/admin/user/delete/{id}', [AdminController::class, 'AdminDeleteUser'])->name('delete.user');

    Route::get('/admin/artikel', [AdminController::class, 'AdminArtikel'])->name('admin.artikel');
    Route::get('/admin/artikel/add', [AdminController::class, 'AdminAddArtikel'])->name('add.artikel');
    Route::post('/admin/artikel/store', [AdminController::class, 'AdminStoreArtikel'])->name('store.artikel');
    Route::get('/admin/artikel/{id}', [AdminController::class, 'AdminViewArtikel'])->name('view.artikel');

    Route::get('/admin/layanan',[AdminController::class, 'AdminLayanan'])->name('admin.layanan');

    Route::get('/admin/pemesanan', [AdminController::class, 'AdminPemesanan'])->name('admin.pemesanan');
});

Route::get('/login', [AdminController::class, 'Adminlogin'])->name('admin.login_admin');
Route::get('/register', [AdminController::class, 'Adminregister'])->name('admin.register_admin');

require __DIR__.'/auth.php';
