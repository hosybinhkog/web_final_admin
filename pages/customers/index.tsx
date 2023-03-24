import { ReactElement } from "react";
import AdminRoute from "../../layouts/AdminRoute";

const Customers = () => {
  return <div>Customers</div>;
};

Customers.getLayout = function getLayout(page: ReactElement) {
  return <AdminRoute>{page}</AdminRoute>;
};

export default Customers;
