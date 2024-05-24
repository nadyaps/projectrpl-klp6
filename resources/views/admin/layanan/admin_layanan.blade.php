@extends('admin.admin_dashboard')
@section('admin')


<div class="page-content">
<div class="row">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center justify-content-between mb-3" >
          <h4 class="mb-3">Layanan</h4>
          <a href="{{ route ('add.layanan') }}" type="button" class="btn btn-outline-primary btn-block btn-icon-text">
            <i data-feather="plus" class="btn-icon-prepend"></i>
              Tambah
          </a>
        </div>
        <div class="table-responsive">
          <table id="dataTableExample" class="table">
            <thead>
              <tr>
                <th>Nama Layanan</th>
                <th>Fasilitas</th>
                <th>Jumlah Layanan</th>
                <th>Ketersedian</th>
                <th>Tipe Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>  
              @foreach($table as $key => $item)       
              <tr>
                <td>{{ $item->nama_layanan }}</td>
                <td>{{ $item->fasilitas }}</td>
                <td>{{ $item->jumlah_layanan }}</td>
                <td>
                  @if( $item->jumlah_layanan == 0)
                    Tidak Tersedia
                  @else
                    Tersedia
                  @endif
                </td>
                <td>{{ $item->price_type }}</td>
                <td>
                  <a href="{{route ('view.layanan', ['id' => $item->id]) }}" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="{{route ('edit.layanan', ['id' => $item->id]) }}" type="button" class="btn btn-secondary btn-icon">
                    <i data-feather="edit"></i>
                  </a>
                  <a href="{{route ('delete.layanan', ['id' => $item->id]) }}" type="button" class="btn btn-danger btn-icon" id="delete">
                    <i data-feather="trash-2"></i>
                  </a>
                </td>
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