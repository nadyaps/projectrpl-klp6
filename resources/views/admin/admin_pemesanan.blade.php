@extends('admin.admin_dashboard')
@section('admin')


<div class="page-content">
<div class="row">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <div >
          <h4 class="mb-4">Pemesanan</h4>
        </div>
        <div class="d-flex flex-row align-items-center justify-content-between mb-4" >
          <a href="" type="button" class="btn btn-outline-primary btn-block btn-icon-text">
          <i data-feather="external-link" class="btn-icon-prepend"></i>
            Export Excel
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
              <tr>                   
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a href="" type="button" class="btn btn-primary btn-icon">
                    <i data-feather="eye"></i>
                  </a>
                  <a href="" type="button" class="btn btn-danger btn-icon" id="delete">
                    <i data-feather="trash-2"></i>
                  </a>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</div>

</div>


@endsection