<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;


class ArtikelController extends Controller
{
  public function artikel()
  {
    $artikel = Artikel::all();
    return response()->json($artikel);
  }
}
