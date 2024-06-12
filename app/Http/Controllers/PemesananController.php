<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Pemesanan;
use App\Models\User;
use App\Models\Layanan;
use App\Models\Harga;

class PemesananController extends Controller
{
  public function index()
  {
    $data = Pemesanan::with('layanan')->with('harga')->orderBy('created_at', 'desc')->get();

    $data->each(function ($item) {
      $item->image_url = $item->image_url;
    });

    return response()->json([
      'data' => $data
    ]);
  }
  public function store(Request $request)
  {
    $data = new Pemesanan;
      $data->user_id = $request->user_id;
      $data->layanan_id = $request->layanan_id;
      $data->harga_id = $request->harga_id;
      $data->nama_pemesan = $request->nama_pemesan;
      $data->tanggal_mulai = $request->tanggal_mulai;
      $data->tanggal_berakhir = $request->tanggal_berakhir;
      $data->jumlah_orang = $request->jumlah_orang;
      $data->metode_pembayaran = $request->metode_pembayaran;
      $data->status = $request->status;
      $data->save();
      $notification = array(
        'message' => 'data Berhasil Ditambahkan',
        'alert-type' => 'success'
      );
  }
  public function show($id)
  {
    $data = Pemesanan::with('layanan')->with('harga')->find($id);

    if ($data && $data->layanan) {
      $data->layanan->photo = $data->layanan->image_url;
  }

    return response()->json([
      'data' => $data
    ]);
  }
}
