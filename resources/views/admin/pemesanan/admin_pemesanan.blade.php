@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
<div class="row">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center justify-content-between mb-3" >
          <h4 class="mb-3">Pemesanan</h4>
          <a href="" type="button" class="btn btn-outline-primary btn-block btn-icon-text">
            <i data-feather="external-link" class="btn-icon-prepend"></i>
              Export Excel
          </a>
        </div>
        <div class="table-responsive">
          <table id="dataTableExample" class="table">
            <thead>
              <tr>
                <th>Kode Booking</th>
                <th>Nama Pemesan</th>
                <th>Layanan</th>
                <th>Waktu Peminjaman</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach($table as $key => $item)    
              <tr>                   
                <td>{{ $item->kode_booking }}</td>
                <td>{{ $item->user->name }}</td>
                <td>{{ $item->layanan->nama_layanan }}</td>
                <td>
                  @if($item->layanan->price_type == 'perhari')
                    <span class="badge badge-primary">Hari</span>
                  @elseif($item->layanan->price_type == 'perjam')
                    <span class="badge badge-primary">Jam</span>
                  @elseif($item->layanan->price_type == 'perbulan')
                    <span class="badge badge-primary">Bulan</span>
                  @elseif($item->layanan->price_type == 'pertahun')
                    <span class="badge badge-primary">Tahun</span>
                  @endif
                </td>
                <td>
                  @if($item->status == 'pending')
                    <span class="badge badge-warning">Pending</span>
                  @elseif($item->status == 'pembayaran berhasil')
                    <span class="badge badge-primary">Pembayaran Berhasil</span>
                  @elseif($item->status == 'mulai')
                    <span class="badge badge-secondary">Mulai</span>
                  @elseif($item->status == 'selesai')
                    <span class="badge badge-danger">Selesai</span>
                  @endif
                </td>
                <td>
                  <a href="" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="" type="button" class="btn btn-danger btn-icon" id="delete">
                    <i data-feather="trash-2"></i>
                  </a>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
@endsection