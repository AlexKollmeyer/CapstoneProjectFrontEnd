import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
const AdminPurchasesPage = ({}) => {
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
      response.data.sort(
        (a, b) => new Date(b.PurchaseDate) - new Date(a.PurchaseDate)
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
      {purchaseArchivePageLoaded ? (
        <PurchaseArchive purchaseArchive={purchaseArchive} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default AdminPurchasesPage;
