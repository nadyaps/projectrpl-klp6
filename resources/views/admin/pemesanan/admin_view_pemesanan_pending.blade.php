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
          <h4>Detail Pemesanan</h4>
        </div>
          <div class="d-flex justify-content-center mt-5 mb-5">
            <img class="wd-md-400 wd-300" src="{{ (!empty ($data->layanan->photo)) ? url('admin_image_layanan/' .$data->layanan->photo) :url('no_image.jpg')}}" alt="layanan" id="showImage">
          </div>
        <div class="d-flex justify-content-center gap-6 mb-5">
          <div>
            <div class=" mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Id Pemesanan:</label>
              <p class="text-muted">{{$data->id}}</p>
              <div class="mt-3">
                <label class="tx-13 fw-bolder mb-0 text-uppercase">Email Pemesan:</label>
                <p class="text-muted">{{$data->user->email}}</p>
              </div>
            </div>
            <div class=" mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Nama Pemesan:</label>
              <p class="text-muted">{{$data->nama_pemesan}}</p>  
            </div>
          </div>
          <div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Tanggal Pesan:</label>
              <p class="text-muted">{{$data->created_at}}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Tanggal Mulai:</label>
              <p class="text-muted">{{$data->tanggal_mulai}}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Tanggal Berakhir:</label>
              <p class="text-muted">{{$data->tanggal_berakhir}}</p>
            </div>
          </div>  
          <div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Jumlah Orang:</label>
              <p class="text-muted">{{$data->jumlah_orang}}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Metode Pembayaran:</label>
              <p class="text-muted">{{$data->metode_pembayaran}}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Status</label>
              <p class="text-muted">{{$data->status}}</p>
            </div>
          </div>  
          <div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Layanan:</label>
              <p class="text-muted">{{$data->layanan->nama_layanan}}</p>
            </div>
            <div class="mt-3">
              <label class="tx-13 fw-bolder mb-0 text-uppercase">Jenis Layanan:</label>
              <p class="text-muted">{{$data->layanan->price_type}}</p>
            </div>
          </div>  
        </div>   

        <!-- Buttons -->
        <div class="d-flex justify-content-end w-full">
          <a href="{{route('accept.pemesanan',  ['id' => $data->id])}}" class="btn btn-outline-primary btn-lg me-3">Konfirmasi Pembayaran</a>
          <a href="{{route('reject.pemesanan',  ['id' => $data->id])}}" class="btn btn-outline-secondary btn-lg ">Batalkan</a>
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
