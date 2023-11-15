import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseArchivePage = ({}) => {
  const [user, token] = useAuth();
  const [purchaseArchivePageLoaded, setPurchaseArchivePageLoaded] =
    useState(false);

  const [purchaseArchive, setPurchaseArchive] = useState([]);
  const fetchPurchaseArchive = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/purchaseArchive/mypurchasearchive",
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
    <div className="purchaseArchivePageWrapper">
      {purchaseArchivePageLoaded ? (
        <PurchaseArchive purchaseArchive={purchaseArchive} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default PurchaseArchivePage;
