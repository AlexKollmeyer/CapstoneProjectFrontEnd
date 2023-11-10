import { Link } from "react-router-dom";
const CustomerItem = ({ id, userName, email }) => {
  return (
    <div>
      <div>
        <h2>{userName}</h2>
        <h2>{email}</h2>
      </div>
      <div>
        <Link to={`/customersWishListPage/${id}`}>Customer's WishList</Link>
        <Link to={`/customersPurchaseArchivePage/${id}`}>
          Customer's Purchase Archive
        </Link>
      </div>
    </div>
  );
};

export default CustomerItem;
