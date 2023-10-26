import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseArchivePage = ({}) => {
  const [user, token] = useAuth();
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
  }, []);

  const totalPurchaseCost = purchaseArchive.reduce(
    (acc, purchaseArchiveitem) => acc + purchaseArchiveitem.purchaseAmount,
    0
  );

  return (
    <div>
      <div>
        <h2>Total amount spent on (this site) ${totalPurchaseCost}</h2>
      </div>
      <PurchaseArchive purchaseArchive={purchaseArchive} />
    </div>
  );
};
export default PurchaseArchivePage;
