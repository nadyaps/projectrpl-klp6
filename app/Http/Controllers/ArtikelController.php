<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;


class ArtikelController extends Controller
{
  public function index()
  {
    $artikel = Artikel::orderBy('created_at', 'desc')->get();

    $artikel->each(function ($item) {
      $item->image_url = $item->image_url;
    });

    return response()->json(['data' => $artikel]);
  }
  public function show($id)
  {
    $artikel = Artikel::find($id);

    if ($artikel) {
      // Tambahkan URL gambar pada artikel yang ditemukan
      $artikel->photo = $artikel->image_url;
    }

    return response()->json(['data' => $artikel]);
  }
  public function artikelList()
  {
    $artikel = Artikel::orderBy('created_at', 'desc')->take(3)->get();
    $artikel->each(function ($item) {
      $item->image_url = $item->image_url;
    });
    
    return response()->json(['data' => $artikel]);
  }
}
