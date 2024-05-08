<nav class="sidebar">
      <div class="sidebar-header">
        <a href="#" class="sidebar-brand">
          5.0Coworking
        </a>
        <div class="sidebar-toggler not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="sidebar-body">
        <ul class="nav">
          <li class="nav-item nav-category">Home</li>
          <li class="nav-item">
            <a href="{{route('admin.index')}}" class="nav-link">
              <i class="link-icon" data-feather="box"></i>
              <span class="link-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item nav-category">Main</li>
          <li class="nav-item">
            <a href="{{route('admin.layanan')}}" class="nav-link">
              <i class="link-icon" data-feather="table"></i>
              <span class="link-title">Daftar Layanan</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('admin.artikel')}}" class="nav-link">
              <i class="link-icon" data-feather="message-square"></i>
              <span class="link-title">Daftar Artikel</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('admin.pemesanan')}}" class="nav-link">
              <i class="link-icon" data-feather="file-text"></i>
              <span class="link-title">Daftar Pemesanan</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('admin.user')}}" class="nav-link">
              <i class="link-icon" data-feather="user"></i>
              <span class="link-title">Daftar User</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>