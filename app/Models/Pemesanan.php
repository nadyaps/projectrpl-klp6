<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;
    public $table = "pemesanan";
    protected $guarded = [];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->kode_booking = self::generateUniqueKodeBooking();
        });
    }

    public static function generateUniqueKodeBooking()
    {
        do {
            $kodeBooking = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (self::where('kode_booking', $kodeBooking)->exists());

        return $kodeBooking;
    }
}
