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
          <h4>Edit Layanan</h4>
        </div>
        <form method="POST" action="{{ route('store.layanan') }}" class="forms-sample" enctype="multipart/form-data" class="forms-sample">
        @csrf
          <input type="hidden" name="id" value="{{$layanan->id}}">
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Nama Layanan</label>
            <div class="col-sm-9">
              <input type="text" name="nama_layanan" class="form-control @error('nama_layanan') is-invalid @enderror" value ="{{$layanan->nama_layanan}}">
              @error('nama_layanan')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Fasilitas</label>
            <div class="col-sm-9">
              <input type="text" name="fasilitas" class="form-control @error('fasilitas') is-invalid @enderror" value ="{{$layanan->fasilitas}}" rows="5">
              @error('fasilitas')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Jumlah Ruangan</label>
            <div class="col-sm-9">
              <input type="number" name="jumlah_layanan" class="form-control @error('jumlah_layanan') is-invalid @enderror" value ="{{$layanan->jumlah_layanan}}">
              @error('jumlah_layanan')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Tipe Harga</label>
            <div class="col-sm-9">
              <select name="price_type" id="price_type" class="form-control @error('price_type') is-invalid @enderror">
                <option value="" disabled selected style="color: #6c757d;">{{$layanan->price_type}}</option>
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
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Harga</label>
            <div class="col-sm-9">
                @foreach ($layanan->harga as $harga)
                <input type="number" name="price" class="form-control @error('price') is-invalid @enderror" value ="{{$harga->price}}">
                @endforeach
                @error('price')
                <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Deskripsi</label>
            <div class="col-sm-9">
              <input name="deskripsi" class="form-control @error('deskripsi') is-invalid @enderror" value ="{{$layanan->deskripsi}}" >
              @error('deskripsi')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-5">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Foto</label>
            <div class="col-sm-9">
              <input type="file" name="photo" class="form-control @error('photo') is-invalid @enderror" id="image">
              @error('photo')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label"></label>
            <img  id="showImage" class="wd-150" src="{{ (!empty ($layanan->photo)) ? url('admin_image_layanan/' .$layanan->photo) :url('no_image.jpg')}}" alt="photo">
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
@endsection
