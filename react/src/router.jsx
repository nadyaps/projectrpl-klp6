import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/defaultLayout';
import Login from './views/login';
import Register from './views/register';
import Dashboard from './views/dashboard';
import Layanan from './views/layanan';
import DetailLayanan from './views/detailLayanan';
import Artikel from './views/artikel';
import DetailArtikel from './views/detailArtikel';
import AboutUs from './views/aboutUs';

import CustomerLayout from './components/customerLayout';
import DashboardCustomer from './views/customer/dashboardCustomer';
import LayananCustomer from './views/customer/layananCustomer'
import ArtikelCus from './views/customer/artikelCustomer';
import DetailLayananCustomer from './views/customer/detailLayananCus';
import DetailArtikelCustomer from './views/customer/detailArtikelCus';
import Keranjang from './views/customer/keranjang';
import AboutUsCus from './views/customer/aboutusCus';
import Pemesanan from './views/customer/pemesanan';
import DetailTransaksi from './views/customer/detailTransaksi';

const router = createBrowserRouter([
  {
    path:'/',
    element: <DefaultLayout />,
    children:[
      {
        path: '/',
        element: <Dashboard/>,
      },
      {
        path: '/layanan',
        element: <Layanan/>
      },
      {
        path: '/detailLayanan',
        element: <DetailLayanan/>
      },
      {
        path: '/artikel',
        element: <Artikel/>
      },
      {
        path: '/detailArtikel',
        element: <DetailArtikel/>
      },
      {
        path: '/aboutus',
        element: <AboutUs/>
      }

    ]
  },

  {
    path: '/',
    element: <CustomerLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardCustomer />,
      },
      {
        path: '/detailLayananCus',
        element: <DetailLayananCustomer />,
      },
      {
        path: '/detailArtikelCus',
        element: <DetailArtikelCustomer />,
      },
      {
        path: '/layananCus',
        element: <LayananCustomer />,
      },
      {
        path: '/artikelCus',
        element: <ArtikelCus />,
      },
      {
        path: '/keranjang',
        element: <Keranjang />,
      },
      {
        path: '/detailTransaksi',
        element: <DetailTransaksi />,
      },
      {
        path: '/aboutuscus',
        element: <AboutUsCus />,
      },
      {
        path: '/pemesanan',
        element: <Pemesanan />,
      },


    ]
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

export default router;