@extends('admin.admin_dashboard')
@section('admin')

<style>
  .gradient-card1 {
    background: linear-gradient(to bottom, rgba(116, 161, 249, 1), rgba(116, 161, 249, 0.5));
    color: white;
    border-radius: 10px;
  }
  .gradient-card2 {
  background: linear-gradient(to bottom, rgba(230, 204, 0, 1), rgba(230, 204, 0, 0.5));
  color: white;
  border-radius: 10px;
}

  .gradient-card3 {
    background: linear-gradient(to bottom, rgba(165, 143, 255, 1), rgba(165, 143, 255, 0.5));
    color: white;
    border-radius: 10px;
  }
</style> 

<div class="page-content">
<div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
  <div>
    <h4 class="mb-3 mb-md-0">Welcome to Dashboard</h4>
  </div>
</div>

<div class="row"> 
  <div class="col-12 col-xl-12 stretch-card">
    <div class="row flex-grow-1">
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card gradient-card1">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline">
              <h6 class="card-title mb-0">Pemesanan</h6>
            </div>
            @php
                $pemesanan = App\Models\Pemesanan::count();
            @endphp
            <div class="row">
              <div class="col-6 col-md-12 col-xl-5">
                <h3 class="ml-10"><span>{{$pemesanan}}<i class="" data-feather="inbox"></i></span></h3> 
              </div>
              <div class="col-6 col-md-12 col-xl-7">
                <div id="customersChart" class="mt-md-3 mt-xl-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card gradient-card2">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline">
              <h6 class="card-title mb-0">Layanan</h6>
              <div class="dropdown mb-2">
              </div>
            </div>
            @php
                $layanan = App\Models\Layanan::count();
            @endphp
            <div class="row">
              <div class="col-6 col-md-12 col-xl-5">
                <h3 class="mb-4">{{$layanan}}<span><i class="" data-feather="archive"></i></span></h3>
              </div>
              <div class="col-6 col-md-12 col-xl-7">
                <div id="ordersChart" class="mt-md-3 mt-xl-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card gradient-card3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline">
              <h6 class="card-title mb-0">Customer</h6>
              <div class="dropdown mb-2">
              </div>
            </div>
            @php
                $customer = App\Models\User::where('role','customer')->count();
            @endphp
            <div class="row">
              <div class="col-6 col-md-12 col-xl-5">
                <h3 class="mb-2 mr-5">{{$customer}}<span><i class="" data-feather="package"></i> </span></h3>
              </div>
              <div class="col-6 col-md-12 col-xl-7">
                <div id="growthChart" class="mt-md-3 mt-xl-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> <!-- row -->


<div class="row">
  <div class="col-lg-7 col-xl-12 stretch-card">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-baseline mb-2">
          <h6 class="card-title mt-2 mb-2">Data Pemesanan</h6>
        </div>
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th>Nama Pemesan</th>
                <th>Email Pemesan</th>
                <th>Layanan</th>
                <th>Jenis Layanan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              @foreach($table as $key => $item)    
              <tr>                   
                <td>{{ $item->nama_pemesan }}</td>
                <td>{{ $item->user->email }}</td>
                <td>{{ $item->layanan->nama_layanan }}</td>
                <td>{{ $item->layanan->price_type }}</td>
                <td>{{ $item->status }}</td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div> 
    </div>
  </div>
</div> <!-- row -->

</div>

@endsection