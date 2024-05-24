@extends('admin.admin_dashboard')
@section('admin')


<div class="page-content">
<div class="row">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center justify-content-between mb-3" >
          <h4 class="mb-3">Artikel</h4>
          <a href="{{route('add.artikel')}}" type="button" class="btn btn-outline-primary btn-block btn-icon-text">
            <i data-feather="plus" class="btn-icon-prepend"></i>
              Tambah
          </a>
        </div>
        <div class="table-responsive">
          <table id="dataTableExample" class="table">
            <thead>
              <tr>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Tanggal Upload</th>
                <th>Tanggal Update</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>    
              @foreach($data as $key => $item)                     
              <tr>
                <td>{{$item->judul}}</td>
                <td>{{Illuminate\Support\Str::limit($item->deskripsi, $limit = 30, $end = '...')}}</td>
                <td>{{$item->created_at}}</td>
                <td>{{$item->updated_at}}</td>
                <td>{{Illuminate\Support\Str::limit($item->photo, $limit = 30, $end = '...')}}</td>
                <td>
                  <a href="{{route ('view.artikel', ['id' => $item->id]) }}" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="{{route ('edit.artikel', ['id' => $item->id]) }}" type="button" class="btn btn-secondary btn-icon">
                    <i data-feather="edit"></i>
                  </a>
                  <a href="{{route ('delete.artikel', ['id' => $item->id]) }}" type="button" class="btn btn-danger btn-icon" id="delete">
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