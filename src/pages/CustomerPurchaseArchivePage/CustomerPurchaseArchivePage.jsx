import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
const CustomerPurchaseArchivePage = ({}) => {
  const navigate = useNavigate();
  let { customerId } = useParams();
  const [user, token] = useAuth();
  const [purchaseArchivePageLoaded, setPurchaseArchivePageLoaded] =
    useState(false);

  const [purchaseArchive, setPurchaseArchive] = useState([]);
  const fetchPurchaseArchive = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/purchaseArchive/customerpurchasearchive/${customerId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setPurchaseArchive(response.data);
    } catch (error) {
      console.warn("Error with PurchaseArchive Request");
    }
  };
  useEffect(() => {
    fetchPurchaseArchive();
    setTimeout(() => {
      setPurchaseArchivePageLoaded(true);
    }, 500);
  }, []);
  return (
    <div>
      <h2>Return to Customer List</h2>
      <button onClick={() => navigate("/adminCustomerListPage")}>Return</button>
      {purchaseArchivePageLoaded ? (
        <PurchaseArchive purchaseArchive={purchaseArchive} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default CustomerPurchaseArchivePage;
