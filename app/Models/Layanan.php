<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Harga;
use Laravel\Sanctum\HasApiTokens;

class Layanan extends Model
{
    use HasFactory;
    public $table = "layanan";
    protected $guarded = [];
    
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($layanan) {
            // Saat layanan dihapus, periksa apakah jumlah layanan yang tersedia menjadi 0
            if ($layanan->jumlah_layanan <= 0) {
                // Jika jumlah layanan kurang dari atau sama dengan 0, hapus layanan
                $layanan->delete();
            }
        });
    }
    public function harga()
    {
      return $this->hasMany(Harga::class, 'layanan_id');
    }
    public function getImageUrlAttribute()
    {
        return asset('admin_image_layanan/' . $this->photo);
    }
}
