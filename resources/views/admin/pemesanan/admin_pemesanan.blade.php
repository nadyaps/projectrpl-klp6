@extends('admin.admin_dashboard')
@section('admin')

<div class="page-content">
<div class="row">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center justify-content-between mb-3" >
          <h4 class="mb-3">Pemesanan</h4>
          <a href="{{route('export.pemesanan')}}" type="button" class="btn btn-outline-primary btn-block btn-icon-text">
            <i data-feather="external-link" class="btn-icon-prepend"></i>
              Export Excel
          </a>
        </div>
        <div class="table-responsive">
          <table id="dataTableExample" class="table">
            <thead>
              <tr>
                <th>Nama Pemesan</th>
                <th>Email Pemesan</th>
                <th>Layanan</th>
                <th>Jenis Layanan</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody> 
              @foreach($data as $key => $item)    
              <tr>                   
                <td>{{ $item->nama_pemesan }}</td>
                <td>{{ $item->user->email }}</td>
                <td>{{ $item->layanan->nama_layanan }}</td>
                <td>{{$item->layanan->price_type}}</td>
                <td>{{$item->status}}</td>
                <td>
                  @if ($item->status == 'pending')
                  <a href="{{route('pending.pemesanan',['id' => $item->id])}}" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="{{route ('delete.pemesanan', ['id' => $item->id]) }}" type="button" class="btn btn-danger btn-icon" id="delete">
                    <i data-feather="trash-2"></i>
                  </a>
                  @else
                  <a href="{{route('view.pemesanan',['id' => $item->id])}}" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="{{route ('delete.pemesanan', ['id' => $item->id]) }}" type="button" class="btn btn-danger btn-icon" id="delete">
                    <i data-feather="trash-2"></i>
                  </a>
                  @endif
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