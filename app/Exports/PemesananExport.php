<?php

namespace App\Exports;

use App\Models\Pemesanan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PemesananExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Pemesanan::all();
    }

    /**
     * @var Pemesanan $pemesanan
     */
    public function map($data): array
    {
        return [
            'ID' => $data->id ?? 'N/A',
            'Email Pemesan' => $data->user->email ?? 'N/A',
            'Nama Pemesan' => $data->nama_pemesan ?? 'N/A',
            'Tanggal Pesan' => $data->created_at ?? 'N/A',
            'Tanggal Mulai' => $data->tanggal_mulai ?? 'N/A',
            'Tanggal Berakhir' => $data->tanggal_berakhir ?? 'N/A',
            'Layanan' => $data->layanan->nama_layanan ?? 'N/A',
            'Jenis Layanan' => $data->layanan->price_type ?? 'N/A',
            'Jumlah Orang' => $data->jumlah_orang ?? 'N/A',
            'Metode Pembayaran' => $data->metode_pembayaran ?? 'N/A',
            'Status' => $data->status ?? 'N/A',
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Email Pemesan',
            'Nama Pemesan',
            'Tanggal Pesan',
            'Tanggal Mulai',
            'Tanggal Berakhir',
            'Layanan',
            'Jenis Layanan',
            'Jumlah Orang',
            'Metode Pembayaran',
            'Status',
        ];
    }
}
