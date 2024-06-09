<?php

namespace App\Http\Controllers;
use App\Models\Layanan;
use App\Models\Harga;

use Illuminate\Http\Request;

class LayananController extends Controller
{
    public function index ()
    {
      $layanan = Layanan::with('harga')->orderBy('created_at', 'desc')->get();
      return response()->json([
          'data' => $layanan
      ]);
    }
    public function show ($id)
    {
      $layanan = Layanan::with('harga')->find($id);
      return response()->json([
          'data' => $layanan
      ]);
    }
    public function layananlist ()
    {
      $layanan = Layanan::with('harga')->orderBy('created_at', 'desc')->take(3)->get();
      return response()->json([
          'data' => $layanan
      ]);
    }
}
