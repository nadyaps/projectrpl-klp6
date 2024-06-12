<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pemesanan;
use App\Models\Layanan;

class AcceptReject extends Controller
{
  public function AcceptRequest($id)
  {
      $accept = Pemesanan::find($id);
  
      if ($accept) {
          $accept->status = 'approved';
          $accept->save();
  
          $layanan = Layanan::find($accept->layanan_id);
  
          if ($layanan) {
              $layanan->jumlah_layanan -= 1;
              $layanan->save();
  
              $notification = array(
                  'message' => 'Konfirmasi Pembayaran Berhasil',
                  'alert-type' => 'success'
              );
  
              return redirect()->route('view.pemesanan',['id' => $accept->id])->with($notification);
          } else {
              $notification = array(
                  'message' => 'Konfirmasi Pembayaran Tidak Berhasil',
                  'alert-type' => 'error'
              );
  
              return redirect()->back()->with($notification);
          }
      } else {
          $notification = array(
              'message' => 'Konfirmasi Pembayaran Tidak Berhasil',
              'alert-type' => 'error'
          );
  
          return redirect()->back()->with($notification);
      }
  }
  public function RejectRequest($id)
  {
      $reject = Pemesanan::find($id);

      if ($reject) {
          $reject->status = 'reject';
          $reject->save();

          $notification = array(
              'message' => 'Pemesanan Dibatalkan',
              'alert-type' => 'error'
          );

          return redirect()->route('view.pemesanan',['id' => $reject->id])->with($notification);
      } else {
          $notification = array(
              'message' => 'Pemesanan Tidak berhasil Dibatalkan',
              'alert-type' => 'error'
          );
          return redirect()->back()->with($notification);
      }
  }
}
