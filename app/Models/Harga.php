<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Harga extends Model
{
    use HasFactory;
    public $table = "harga";
    protected $guarded = [];

    public function layanan()
    {
      return $this->belongsTo(Layanan::class);
    }

}
