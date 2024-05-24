@extends('admin.admin_dashboard')
@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<div class="page-content">
<div class="row">
</div>
<div class="row profile-body"> 
  <div class="col-md-12 col-xl-12 center-wrapper">
    <div class="card rounded">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center justify-content-between mb-3">
          <h4>Tambah Layanan</h4>
        </div>
        <form method="POST" action="{{route('update.layanan')}}" class="forms-sample" enctype="multipart/form-data" class="forms-sample">
        @csrf
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Nama Layanan</label>
            <div class="col-sm-9">
              <input type="text" name="nama_layanan" class="form-control @error('nama_layanan') is-invalid @enderror" placeholder="Nama Layanan">
              @error('nama_layanan')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Fasilitas</label>
            <div class="col-sm-9">
              <textarea type="text" name="fasilitas" class="form-control @error('fasilitas') is-invalid @enderror" placeholder="Fasilitas yang tersedia" rows="5"></textarea>
              @error('fasilitas')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Jumlah Ruangan</label>
            <div class="col-sm-9">
              <input type="number" name="jumlah_layanan" class="form-control @error('jumlah_layanan') is-invalid @enderror" placeholder="Jumlah Ruangan">
              @error('jumlah_layanan')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Tipe Harga</label>
            <div class="col-sm-9">
              <select name="price_type" id="price_type" class="form-control @error('price_type') is-invalid @enderror">
                <option value="" disabled selected style="color: #6c757d;">----Pilih Tipe Harga----</option>
                <option value="perjam">Perjam</option>
                <option value="perhari">Perhari</option>
                <option value="perbulan">Perbulan</option>
                <option value="pertahun">Pertahun</option>
              </select>
              @error('price_type')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3" id="harga_field" style="display: none;">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Harga</label>
            <div class="col-sm-9">
                <input type="number" name="price" class="form-control @error('price') is-invalid @enderror" placeholder="Harga">
                @error('price')
                <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Deskripsi</label>
            <div class="col-sm-9">
              <textarea name="deskripsi" class="form-control @error('deskripsi') is-invalid @enderror" placeholder="Deskripsi" rows="5"></textarea>
              @error('deskripsi')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-5">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Photo</label>
            <div class="col-sm-9">
              <input type="file" name="photo" class="form-control @error('photo') is-invalid @enderror" id="image">
              @error('photo')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary me-2">Simpan</button>
            <a href="{{route('admin.layanan')}}" class="btn btn-outline-secondary">Batal</a>
          </div>  
        </form>
      </div>     
    </div>
  </div>
</div>

<script>
    $(document).ready(function() {
        $('#price_type').change(function() {
            var selectedOption = $(this).val();
            if (selectedOption === 'perjam' || selectedOption === 'perhari' || selectedOption === 'perbulan' || selectedOption === 'pertahun') {
                $('#harga_field').show();
            } else {
                $('#harga_field').hide();
            }
        });
    });
</script>

@endsection
