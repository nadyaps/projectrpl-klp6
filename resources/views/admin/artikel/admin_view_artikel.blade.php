@extends('admin.admin_dashboard')
@section('admin')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<div class="page-content">
<div class="row">
  <div class="row profile-body"> 
    <div class="col-md-12 col-xl-12 center-wrapper">
      <div class="card rounded">
        <div class="card-body">
          <div class="d-flex flex-row align-items-center justify-content-between mb-3">
            <h4>Detail Artikel</h4>
          </div>
          <div class="d-flex justify-content-center mt-5 mb-5 ">
            <img class="wd-md-400 wd-300" src="{{ (!empty ($data->photo)) ? url('/admin_image_artikel/' .$data->photo) :url('no_image.jpg')}}" alt="profile">
          </div>
          <div class="mt-3">
            <label class="tx-13 fw-bolder mb-0 text-uppercase">Judul:</label>
            <p class="text-muted">{{ $data->judul }}</p>
          </div>
          <div class="mt-3" style="max-width: 100%; word-wrap: break-word;">
            <label class="tx-13 fw-bolder mb-0 text-uppercase">Deskripsi:</label>
            <p class="text-muted" >{{ $data->deskripsi }}</p>
          </div>
          <div class=" mt-3">
            <label class="tx-13 fw-bolder mb-0 text-uppercase">Tanggal Upload:</label>
            <p class="text-muted">{{ $data->created_at }}</p>  
          </div>
          <div class="mt-3">
            <label class="tx-13 fw-bolder mb-0 text-uppercase">Tanggal Update:</label>
            <p class="text-muted">{{ $data->updated_at }}</p>
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