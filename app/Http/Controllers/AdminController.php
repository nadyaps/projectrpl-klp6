<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Artikel;

class AdminController extends Controller
{
    public function AdminDashboard()
    {
        return view('admin.index');
    }

    public function AdminLogout (Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }

    public function AdminProfile()
    {
      $id = Auth::user()->id;
      $profileAdmin = User::find($id);
      return view('admin.admin_profile', compact('profileAdmin'));
    }

    public function AdminProfileStore(Request $request)
    {
      $id = Auth::user()->id;
      $data = User::find($id);
      $data->name = $request->name;
      $data->username = $request->username;
      $data->email = $request->email;
      $data->phone = $request->phone;
      $data->address = $request->address;

      if($request->file('photo')){
        $file = $request->file('photo');
        @unlink(public_path('admin_image/'.$data->photo));
        $filename = date('YmdHis').$file->getClientOriginalName();
        $file->move(public_path('admin_image'),$filename);
        $data['photo'] = $filename;
      }
      $data->save();
      $notification = array(
        'message' => 'Profil Berhasil Diubah',
        'alert-type' => 'success'
      );
      return redirect()->route('admin.profile')->with($notification);
    } //End Method

    public function AdminUser()
    {
      $table = User::get();
      return view('admin.admin_user', compact('table'));
    } //End Method

    public function AdminViewUser($id)
    {
      $detailUser = User::find($id);
      return view('admin.admin_view_user', compact('detailUser'));

    } //End Method
    public function AdminDeleteUser($id)
    {
     User::findOrFail($id)->delete();
      $notification = array(
        'message' => 'User berhasil dihapus',
        'alert-type' => 'success'
      );
      return redirect()->back()->with($notification);
    } //End Method

    public function AdminChangePassword()
    {
      $id = Auth::user()->id;
      $profileAdmin = User::find($id);
      return view('admin.admin_change_password', compact('profileAdmin'));
    } //End Method

    public function AdminUpdatePassword(Request $request)
    {
      //Validation
      $request->validate([
        'old_password' => 'required',
        'new_password' => 'required|confirmed'
      ]);

      //Match Old Password
      if(!Hash::check($request->old_password, Auth::user()->password)){
        $notification = array(
          'message' => 'Password Lama Salah',
          'alert-type' => 'error'
        );
        return Redirect()->back()->with($notification);
      }

      //Update New Password
      User::whereId(auth()->user()->id)->update(['password' => Hash::make($request->new_password)]);
      $notification = array(
        'message' => 'Password Berhasil Diubah',
        'alert-type' => 'success'
      );
      return Redirect()->route('admin.change.password')->with($notification);
    } //End Method

    public function AdminArtikel()
    {
      $data = Artikel::get();
      return view('admin.admin_artikel', compact('data'));
    } //End Method
    public function AdminAddArtikel()
    {
      return view('admin.admin_add_artikel');
    } //End Method

    public function AdminStoreArtikel(Request $request)
    {
      //Validation
      $request->validate([
        'judul' => 'required',
        'tanggal_upload' => 'required',
        'tanggal_update' => 'required',
        'deskripsi' => 'required',
        'photo' => 'required'
      ]);

      //Insert Data
      $data = new Artikel();
      $data->judul = request('judul');
      $data->tanggal_upload = request('tanggal_upload');
      $data->tanggal_update = request('tanggal_update');
      $data->deskripsi = request('deskripsi');

      if($file = request()->file('photo')){
        $filename = $file->getClientOriginalName();
        $file->move('admin_image', $filename);
        $data['photo'] = $filename;
      }
      $data->save();
      $notification = array(
        'message' => 'Artikel Berhasil Ditambahkan',
        'alert-type' => 'success'
      );
      return redirect()->route('admin.artikel')->with($notification);
    }

    public function AdminViewArtikel($id)
    {
      $data = Artikel::find($id);
      return view('admin.admin_view_artikel', compact('data'));
    } //End Method
    

}
