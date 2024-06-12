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
        Schema::create('pemesanan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index();
            $table->foreignId('layanan_id')->index();
            $table->foreignId('harga_id')->index();
            $table->string('nama_pemesan');
            $table->string('tanggal_mulai');
            $table->string('tanggal_berakhir');
            $table->integer('jumlah_orang');
            $table->enum('metode_pembayaran', ['e-wallet', 'transfer bank']);
            $table->enum('status', ['pending','reject','approved','start', 'finish']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemesanan');
    }
};
