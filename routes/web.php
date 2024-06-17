<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AcceptReject;

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
// require __DIR__.'/auth.php';

//Admin Route
Route::middleware(['auth'])->group(function(){
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.index');
    Route::get('/admin/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');

    Route::get('/admin/profile', [AdminController::class, 'AdminProfile'])->name('admin.profile');
    Route::post('/admin/profile/store' , [AdminController::class, 'AdminProfileStore'])->name('admin.profile.store');
    Route::get('/admin/change-password', [AdminController::class, 'AdminChangePassword'])->name('admin.change.password');
    Route::post('/admin/update-password', [AdminController::class, 'AdminUpdatePassword'])->name('admin.update.password');

    Route::get('/admin/user', [AdminController::class, 'AdminUser'])->name('admin.user');
    Route::get('/admin/user/add', [AdminController::class, 'AdminAddUser'])->name('add.user');
    Route::post('/admin/user/update', [AdminController::class, 'AdminUpdateUser'])->name('update.user');
    Route::get('/admin/user/{id}', [AdminController::class, 'AdminViewUser'])->name('view.user');
    Route::get('/admin/user/delete/{id}', [AdminController::class, 'AdminDeleteUser'])->name('delete.user');

    Route::get('/admin/artikel', [AdminController::class, 'AdminArtikel'])->name('admin.artikel');
    Route::get('/admin/artikel/add', [AdminController::class, 'AdminAddArtikel'])->name('add.artikel');
    Route::post('/admin/artikel/update', [AdminController::class, 'AdminUpdateArtikel'])->name('update.artikel');
    Route::get('/admin/artikel/{id}', [AdminController::class, 'AdminViewArtikel'])->name('view.artikel');
    Route::get('/admin/artikel/delete/{id}', [AdminController::class, 'AdminDeleteArtikel'])->name('delete.artikel');
    Route::get('/admin/artikel/edit/{id}', [AdminController::class, 'AdminEditArtikel'])->name('edit.artikel');
    Route::post('/admin/artikel/store',[AdminController::class, 'AdminStoreArtikel'])->name('store.artikel');

    Route::get('/admin/layanan',[AdminController::class, 'AdminLayanan'])->name('admin.layanan');
    Route::get('/admin/layanan/add', [AdminController::class, 'AdminAddLayanan'])->name('add.layanan');
    Route::post('/admin/layanan/update', [AdminController::class, 'AdminUpdateLayanan'])->name('update.layanan');
    Route::get('/admin/layanan/{id}', [AdminController::class, 'AdminViewLayanan'])->name('view.layanan');
    Route::get('/admin/layanan/delete/{id}', [AdminController::class, 'AdminDeleteLayanan'])->name('delete.layanan');
    Route::get('/admin/layanan/edit/{id}',[AdminController::class, 'AdminEditLayanan'])->name('edit.layanan');
    Route::post('/admin/layanan/store',[AdminController::class, 'AdminStoreLayanan'])->name('store.layanan');

    Route::get('/admin/pemesanan', [AdminController::class, 'AdminPemesanan'])->name('admin.pemesanan');
    Route::get('/admin/pemesanan/{id}', [AdminController::class, 'AdminViewPemesanan'])->name('view.pemesanan');
    Route::get('/admin/pending/{id}', [AdminController::class, 'AdminPendingPemesanan'])->name('pending.pemesanan');
    Route::get('/admin/pemesanan/delete/{id}', [AdminController::class, 'AdminDeletePemesanan'])->name('delete.pemesanan');

    Route::get('/pemesanan/export/', [AdminController::class, 'PemesananExport'])->name('export.pemesanan');

    Route::get('/admin/pemesanan/accept/{id}', [AcceptReject::class, 'AcceptRequest'])->name('accept.pemesanan');
    Route::get('/admin/pemesanan/reject/{id}', [AcceptReject::class, 'RejectRequest'])->name('reject.pemesanan');
});

Route::get('/login', [AdminController::class, 'Adminlogin'])->name('admin.login_admin');

Route::post('/signup', [AuthController::class, 'signup']);

require __DIR__.'/auth.php';
// require __DIR__.'/api.php';