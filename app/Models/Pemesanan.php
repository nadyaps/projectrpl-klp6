<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Layanan;
use App\Models\User;
use App\Models\Harga;
use Laravel\Sanctum\HasApiTokens;

class Pemesanan extends Model
{
    use HasFactory;
    public $table = "pemesanan";
    protected $guarded = [];

    protected static function boot()
    {
      parent::boot();
      static::saving(function ($order) {
          // Periksa apakah tanggal berakhirnya sudah lewat
          if ($order->tanggal_berakhir < now()) {
              // Jika sudah lewat, ubah status menjadi "selesai"
              $order->status = 'finish';
          } elseif ($order->tanggal_mulai <= now()) {
              // Jika belum lewat tetapi sudah melewati tanggal mulainya, periksa status pembayaran
              if ($order->status == 'approved') {
                  // Jika pembayaran sudah selesai, ubah status menjadi "mulai"
                  $order->status = 'start';
              } else {
                  // Jika pembayaran belum selesai, ubah status menjadi "pending"
                  $order->status = 'pending';
              }
          }
      });
    }
    
    public function harga()
    {
      return $this->belongsTo(Harga::class);
    }
    public function layanan()
    {
      return $this->belongsTo(Layanan::class);
    }
    public function user()
    {
      return $this->belongsTo(User::class);
    }
    public function getImageUrlAttribute()
    {
        return asset('admin_image_layanan/' . $this->layanan->photo);
    }

}
