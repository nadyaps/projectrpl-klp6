<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Artikel extends Model
{
    use HasFactory;
    public $table = "artikel";
    protected $guarded = [];

    public function getImageUrlAttribute()
    {
        return asset('admin_image_artikel/' . $this->photo);
    }
}
