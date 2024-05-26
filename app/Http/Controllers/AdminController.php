<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Artikel;
use App\Models\Layanan;
use App\Models\Pemesanan;
use App\Models\Harga;
// use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UsersExport;

class AdminController extends Controller
{
    public function AdminDashboard()
    {
      $table = Pemesanan::limit(10)->get();
      return view('admin.index', compact('table'));
    }

    public function AdminLogout (Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }

    //ADMIN PROFILE

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

    //ADMIN USER

    public function AdminUser()
    {
      $table = User::all();
      return view('admin.user.admin_user', compact('table'));
    } //End Method
    public function AdminAddUser()
    {
      $data = User::all();
      return view('admin.user.admin_add_user');
    } //End Method

    public function AdminUpdateUser(Request $request)
    {
      $data = new User;
      $data->name = $request->name;
      $data->username = $request->username;
      $data->email = $request->email;
      $data->phone = $request->phone;
      $data->address = $request->address;
      $data->role = $request->role;
      $data->password = Hash::make('123');
      if($request->hasFile('photo')){
        $file = $request->file('photo');
        $filename = date('YmdHis').$file->getClientOriginalName();
        $file->move(public_path('admin_image_user'),$filename);
        $data->photo = $filename;
      } 
      $data->save();
      $notification = array(
        'message' => 'User Berhasil Ditambahkan',
        'alert-type' => 'success'
      );
      return redirect()->route('admin.user')->with($notification);
    } //End Method

    public function AdminViewUser($id)
    {
      $data = User::find($id);
      return view('admin.user.admin_view_user', compact('data'));

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

    //ADMIN CHANGE PASSWORD

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

    //ADMIN ARTIKEL

    public function AdminArtikel()
    {
      $data = Artikel::get();
      return view('admin.artikel.admin_artikel', compact('data'));
    } //End Method
    public function AdminAddArtikel()
    {
      return view('admin.artikel.admin_add_artikel');
    } //End Method

    public function AdminUpdateArtikel(Request $request)
    {
      $data = new Artikel;
      $data->judul = $request->judul;
      $data->deskripsi = $request->deskripsi;
      if($request->file('photo')){
        $file = $request->file('photo');
        @unlink(public_path('admin_image_artikel/'.$data->photo));
        $filename = date('YmdHis').$file->getClientOriginalName();
        $file->move(public_path('admin_image_artikel'),$filename);
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
      return view('admin.artikel.admin_view_artikel', compact('data'));
    } //End Method

    public function AdminDeleteArtikel($id)
    {
      Artikel::findOrFail($id)->delete();
      $notification = array(
        'message' => 'Artikel berhasil dihapus',
        'alert-type' => 'success'
      );
      return redirect()->back()->with($notification);
    } //End Method

    public function AdminEditArtikel($id)
    {
      $table = Artikel::findOrFail($id);
      return view('admin.artikel.admin_edit_artikel', compact('table'));
    } //End Method

    public function AdminStoreArtikel(Request $request)
    {
      $pid = $request->id;
      $data = Artikel::where('id', $pid)->first();
      $data->judul = $request->judul;
      $data->deskripsi = $request->deskripsi;
      if($request->hasFile('photo')){
        $file = $request->file('photo');
        if($data->photo){
          @unlink(public_path('admin_image_artikel/'.$data->photo));
        }
        $filename = date('YmdHis').$file->getClientOriginalName();
        $file->move(public_path('admin_image_artikel'),$filename);
        $data->photo = $filename;
      }
      $data->save();
      $notification = array(
        'message' => 'Artikel berhasil diubah',
        'alert-type' => 'success'
      );
      return redirect()->route('admin.artikel')->with($notification);
    } //End Method

    //ADMIN LAYANAN

    public function AdminLayanan()
    {
      $table = Layanan::with('harga')->get();
      return view('admin.layanan.admin_layanan', compact('table'));
    } //End Method

    public function AdminAddLayanan()
    {
      return view('admin.layanan.admin_add_layanan');
    }

    public function AdminUpdateLayanan(Request $request)
    {
        $request->validate([
            'nama_layanan' => 'required',
            'deskripsi' => 'required',
            'fasilitas' => 'required',
            'jumlah_layanan' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        $data = new Layanan;
        $data->nama_layanan = $request->nama_layanan;
        $data->deskripsi = $request->deskripsi;
        $data->fasilitas = $request->fasilitas;
        $data->jumlah_layanan = $request->jumlah_layanan;
        
        if($request->file('photo')){
            $file = $request->file('photo');
            $filename = date('YmdHis').$file->getClientOriginalName();
            $file->move(public_path('admin_image_layanan'), $filename);
            $data->photo = $filename;
        }
        $data->price_type = $request->price_type; // Simpan jenis harga di model Layanan
        $data->save();
    
        // Simpan harga untuk setiap jenis harga yang dipilih
       
            $harga = new Harga;
            $harga->layanan_id = $data->id;
            $harga->price_type = $data->price_type;
            $harga->price = $request->price;
            $harga->save();
    
        $notification = array(
            'message' => 'Layanan Berhasil Ditambahkan',
            'alert-type' => 'success'
        );
        return redirect()->route('admin.layanan')->with($notification);
    }
    
    public function AdminViewLayanan($id)
    {
    $data = Layanan::with('harga')->find($id);

    if (!$data) {
        // Handle the case where the Layanan with the given ID doesn't exist
        return redirect()->back()->with('error', 'Layanan not found');
    }

    return view('admin.layanan.admin_view_layanan', compact('data'));
    }

    public function AdminDeleteLayanan($id)
    {
        Layanan::findOrFail($id)->delete();
        $notification = array(
          'message' => 'Layanan berhasil dihapus',
          'alert-type' => 'success'
      );
      return redirect()->back()->with($notification);
    }

    public function AdminEditLayanan($id)
    {
      $data = Layanan::findOrFail($id);
      return view('admin.layanan.admin_edit_layanan', compact('data'));
    }

    public function AdminStoreLayanan(Request $request)
    {
        $pid = $request->id;
        $data = Layanan::where('id', $pid)->first();
        $data->nama_layanan = $request->nama_layanan;
        $data->deskripsi = $request->deskripsi;
        $data->fasilitas = $request->fasilitas;
        $data->jumlah_layanan = $request->jumlah_layanan;
        

        if($request->hasFile('photo')){
          $file = $request->file('photo');
  
          if($data->photo){
            @unlink(public_path('admin_image_layanan/'.$data->photo));
          }
          $filename = date('YmdHis').$file->getClientOriginalName();
          $file->move(public_path('admin_image_layanan'),$filename);
          $data->photo = $filename;
        }
        $data->price_type = $request->price_type; 
        $data->save();

        $harga = Harga::find($data->layanan_id);
        $harga->layanan_id = $data->id;
        $harga->price_type = $data->price_type;
        $harga->price = $request->price;
        $harga->save();
        
  
        $notification = array(
          'message' => 'Layanan berhasil diubah',
          'alert-type' => 'success'
        );
        return redirect()->route('admin.layanan')->with($notification);
    }


    //ADMIN PEMESANAN
    public function AdminPemesanan()
    {
      $table = Pemesanan::get();
      $user = User::get();
      $layanan = Layanan::get();
      return view('admin.pemesanan.admin_pemesanan', compact('table', 'user', 'layanan'));
    } //End Method

    //Export Data
    // public function UsersExport() 
    // {
    //   return Excel::download(new UsersExport, 'users.xlsx');
    // }
}

