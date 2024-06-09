<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;


class ArtikelController extends Controller
{
  public function index()
  {
    $artikel = Artikel::orderBy('created_at', 'desc')->get();
    return response()->json(['data' => $artikel]);
  }
  public function show($id)
  {
    $artikel = Artikel::find($id);
    return response()->json(['data' => $artikel]);
  }
  public function artikelList()
  {
    $artikel = Artikel::orderBy('created_at', 'desc')->take(3)->get();
    return response()->json(['data' => $artikel]);
  }
}
