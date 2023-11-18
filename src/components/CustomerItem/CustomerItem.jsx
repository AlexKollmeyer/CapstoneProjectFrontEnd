import { Link } from "react-router-dom";
import "./CustomerItem.css";
const CustomerItem = ({ id, userName, email }) => {
  return (
    <div className="customer">
      <div className="customerInfo">
        <h2>Username: {userName}</h2>
        <h2>Email: {email}</h2>
      </div>
      <div className="links">
        <Link to={`/customersWishListPage/${id}`}>Customer's WishList</Link>
        <Link to={`/customersPurchaseArchivePage/${id}`}>
          Customer's Purchase Archive
        </Link>
      </div>
    </div>
  );
};

export default CustomerItem;
