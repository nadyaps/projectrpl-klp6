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
          <h4>Edit Artikel</h4>
        </div>
        <form method="POST" action="{{route('store.artikel')}}" class="forms-sample" enctype="multipart/form-data" class="forms-sample">
        @csrf
          <input type="hidden" name="id" value="{{$artikel->id}}">
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Judul</label>
            <div class="col-sm-9">
              <input type="text" name="judul" class="form-control @error('judul') is-invalid @enderror" value ="{{$artikel->judul}}">
              @error('judul')
                <span class="text-danger">{{ $message }}</span>
              @enderror
            </div>
          </div>
          <div class="row mb-3">
            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Deskripsi</label>
            <div class="col-sm-9">
              <input name="deskripsi" class="form-control @error('deskripsi') is-invalid @enderror" value ="{{$artikel->deskripsi}}" >
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
            <img  id="showImage" class="wd-150" src="{{ (!empty ($artikel->photo)) ? url('admin_image_artikel/' .$artikel->photo) :url('no_image.jpg')}}" alt="photo">
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary me-2">Simpan</button>
            <a href="{{route('admin.artikel')}}" class="btn btn-outline-secondary">Batal</a>
          </div>  
        </form>
      </div>     
    </div>
  </div>
</div>
@endsection
