<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('layanan', function (Blueprint $table) {
            $table->id();
            $table->string('nama_layanan');
            $table->text('deskripsi');
            $table->string('fasilitas');
            $table->enum('price_type', ['perhari', 'perjam', 'perbulan', 'pertahun']);
            $table->unsignedInteger('jumlah_layanan');
            $table->string('photo');
            $table->timestamps();
        });
        
        Schema::create('harga', function (Blueprint $table) {
            $table->id();
            $table->foreignId('layanan_id')->index();
            $table->enum('price_type', ['perhari', 'perjam', 'perbulan', 'pertahun']);
            $table->decimal('price', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layanan');
        Schema::dropIfExists('harga');
    }
};
