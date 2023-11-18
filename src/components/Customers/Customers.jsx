import CustomerItem from "../CustomerItem/CustomerItem";
import "./Customers.css";
const Customers = ({ customers = [] }) => {
  const CustomerItems = customers.map((customer) => (
    <CustomerItem
      key={customer.id}
      id={customer.id}
      userName={customer.userName}
      email={customer.email}
    />
  ));

  return <div className="customers">{CustomerItems}</div>;
};

export default Customers;
