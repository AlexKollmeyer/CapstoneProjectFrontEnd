import PurchaseArchive from "../../components/PurchaseArchive/PurchaseArchive";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseArchivePage = ({}) => {
  const [user, token] = useAuth;
  const [purchaseArchive, setPurchaseArchive] = useState;

  const fetchPurchaseArchive = async () => {
    try {
      let response = await axios.get(
        " http://localhost:5000/api/purchaseArchive/mypurchasearchive",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setPurchaseArchive(response.data);
    } catch (error) {
      console.warn("Error with WishList Request");
    }
  };
  useEffect(() => {
    fetchPurchaseArchive();
  }, []);
  return (
    <div>
      <PurchaseArchive purchaseArchive={purchaseArchive} />
    </div>
  );
};
