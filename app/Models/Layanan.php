<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Layanan extends Model
{
    use HasFactory;
    public $table = "layanan";
    protected $guarded = [];
    
    public function harga()
    {
      return $this->hasMany(Harga::class, 'layanan_id');
    }
}
