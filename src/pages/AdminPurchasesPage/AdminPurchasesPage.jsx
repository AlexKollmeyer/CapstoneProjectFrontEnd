import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
import { useNavigate, Link } from "react-router-dom";
import "./AdminPurchasesPage.css";
const AdminPurchasesPage = ({}) => {
  const navigate = useNavigate();
  const [user, token] = useAuth();
  const [purchaseArchivePageLoaded, setPurchaseArchivePageLoaded] =
    useState(false);

  const [purchaseArchive, setPurchaseArchive] = useState([]);
  const fetchPurchaseArchive = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/purchaseArchive/allcustomerpurchases",
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
      <div className="header">
        <h2>View Customers</h2>
        <button onClick={() => navigate("/adminCustomerListPage")}>
          Customer List
        </button>
      </div>

      {purchaseArchivePageLoaded ? (
        <PurchaseArchive purchaseArchive={purchaseArchive} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default AdminPurchasesPage;
