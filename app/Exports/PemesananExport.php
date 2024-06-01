<?php

namespace App\Exports;

use App\Models\Pemesanan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PemesananExport implements FromCollection,  WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Pemesanan::all();
    }
    public function headings(): array
    {
        return [
            'ID',
            'Kode Booking',
            'User ID',
            'Layanan ID',
            'Tanggal Pesan',
            'Tanggal Mulai',
            'Tanggal Berakhir',
            'Jumlah Orang',
            'Metode Pembayaran',
            'Status',
            'Created At',
            'Updated At',
        ];
    }
}
