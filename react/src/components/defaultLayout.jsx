import Navbar from "./layout/navbar"
import Footer from "./layout/footer"
import Dashboard from "../views/dashboard"
import { Outlet } from "react-router-dom";

export default function defaultLayout() {
  return (
    
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
   
  );
}
