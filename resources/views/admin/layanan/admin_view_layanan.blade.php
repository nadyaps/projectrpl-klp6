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
          <h4>Detail Layanan</h4>
        </div>
          <div class="d-flex justify-content-center mt-5 mb-5 ">
            <img class="wd-md-400 wd-300" src="{{ (!empty ($data->photo)) ? url('/admin_image_layanan/' .$data->photo) :url('no_image.jpg')}}" alt="profile">
          </div>
        <div class="d-flex justify-content-center gap-6 mb-5">
          <div class="">
             <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Nama Layanan:</label>
              <p class="text-muted">{{ $data->nama_layanan }}</p>
            </div>
            <div class=" mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Fasilitas:</label>
              <p class="text-muted">{{ $data->fasilitas }}</p>
            </div>
            <div class=" mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Deskripsi:</label>
              <p class="text-muted">{{ $data->deskripsi }}</p>  
            </div>
          </div>
          <div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Tipe Harga:</label>
              <p class="text-muted">{{ $data->price_type }}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Harga:</label>
              @foreach ($data->harga as $harga)
              <p class="text-muted">{{ $harga->price }}</p>
              @endforeach
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Jumlah Layanan:</label>
              <p class="text-muted">{{ $data->jumlah_layanan }}</p>
            </div>
          </div>  
          
        </div>   
      </div>
    </div>
  </div>
</div>

</div>

<script type="text/javascript">
  $(document).ready(function(){
    $('#image').change(function(e){
      var reader = new FileReader();
      reader.onload = function(e){
        $('#showImage').attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files['0']);
    });
  });
</script>

@endsection