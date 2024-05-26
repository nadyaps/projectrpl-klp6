import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/defaultLayout';
import Login from './views/login';
import Register from './views/register';
import Pemesanan from './views/pemesanan';
import Dashboard from './views/dashboard';
import Layanan from './views/layanan';
import CustomerLayout from './components/customerLayout';
import DashboardCustomer from './views/customer/dashboardCustomer';
import DetailLayanan from './views/detailLayanan';
import Artikel from './views/artikel';
import DetailArtikel from './views/detailArtikel';
import AboutUs from './views/aboutUs';

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
    path: '/dashboard',
    element: <CustomerLayout />,
    children: [
      {
        path: '',
        element: <DashboardCustomer />,
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