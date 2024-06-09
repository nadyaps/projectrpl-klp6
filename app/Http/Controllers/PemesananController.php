<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pemesanan;

class PemesananController extends Controller
{
  public function store(Request $request)
  {
      $validated = $request->validate([
          'nama_pemesan' => 'required|string|max:255',
          'tanggal_mulai' => 'required',
          'tanggal_selesai' => 'required',
          'jumlah_orang' => 'required',
      ]);

      $booking = Pemesanan::create($validated);

      return response()->json($booking, 201);
  }
}
