import NavbarCus from "./layout/navbarCus";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

export default function customerLayout() {
  return (
    <div>
      <NavbarCus></NavbarCus>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
