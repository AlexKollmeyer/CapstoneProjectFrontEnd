import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Customers from "../../Customers/Customers";
const AdminCustomerListPage = ({}) => {
  const [customers, setCustomers] = useState([]);
  const [customersLoaded, setCustomersLoaded] = useState(false);

  const [user, token] = useAuth();

  const fetchCustomers = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/customer", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
      setCustomers(response.data);
    } catch (error) {
      console.warn("error with Customers get request");
    }
  };
  useEffect(() => {
    fetchCustomers();
    setTimeout(() => {
      setCustomersLoaded(true);
    }, 500);
  }, []);
  return (
    <div>
      {customersLoaded ? <Customers customers={customers} /> : <p>Loading</p>}
    </div>
  );
};

export default AdminCustomerListPage;