import CustomerItem from "../components/CustomerItem/CustomerItem";

const Customers = ({ customers = [] }) => {
  const CustomerItems = customers.map((customer) => (
    <CustomerItem
      key={customer.id}
      id={customer.id}
      userName={customer.userName}
      email={customer.email}
    />
  ));

  return <div>{CustomerItems}</div>;
};

export default Customers;
