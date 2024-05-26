import NavbarCus from "./layout/navbarCus";
import Footer from "./layout/footer";
import Dashboard from "../views/customer/dashboardCustomer";

export default function customerLayout() {
  return (
    <div className="">
      <NavbarCus />
      <div className="mt-5 mb-5">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}
