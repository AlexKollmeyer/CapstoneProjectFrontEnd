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
        <h2>PixelSaverHQ Admin Pages</h2>
        <p>
          Information about the admin pages Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Scelerisque felis imperdiet proin
          fermentum. Est velit egestas dui id ornare arcu odio ut sem.
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
          Fermentum leo vel orci porta non pulvinar neque laoreet. Semper eget
          duis at tellus at urna condimentum mattis pellentesque. Ipsum dolor
          sit amet consectetur adipiscing elit ut. Porta nibh venenatis cras sed
          felis eget velit aliquet sagittis. Venenatis a condimentum vitae
          sapien pellentesque. A pellentesque sit amet porttitor eget dolor.
          Mattis nunc sed blandit libero volutpat sed. Vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim. Sapien pellentesque
          habitant morbi tristique. Maecenas accumsan lacus vel facilisis
          volutpat est. Scelerisque varius morbi enim nunc. Nulla pharetra diam
          sit amet. Sed vulputate odio ut enim. Vel fringilla est ullamcorper
          eget nulla. Odio ut sem nulla pharetra diam sit amet nisl suscipit.
          Duis convallis convallis tellus id interdum velit laoreet id donec.
          Etiam dignissim diam quis enim lobortis scelerisque fermentum. Auctor
          urna nunc id cursus metus aliquam eleifend. Maecenas sed enim ut sem
          viverra aliquet. Hendrerit dolor magna eget est lorem ipsum. Proin
          fermentum leo vel orci porta non. Volutpat odio facilisis mauris sit
          amet massa vitae. Feugiat in ante metus dictum at tempor commodo
          ullamcorper a. Viverra aliquet eget sit amet tellus cras adipiscing.
          Mi sit amet mauris commodo. Amet mauris commodo quis imperdiet massa
          tincidunt nunc pulvinar. Gravida neque convallis a cras semper auctor.
          Eu mi bibendum neque egestas congue. Viverra justo nec ultrices dui
          sapien. Est velit egestas dui id ornare arcu odio ut sem. Arcu dictum
          varius duis at consectetur lorem donec massa.
        </p>
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
