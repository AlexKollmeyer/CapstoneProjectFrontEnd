import { useNavigate, Link } from "react-router-dom";
import "./AdminHomePage.css";
const AdminHomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="adminHomePage">
      <h1>Welcome Admin</h1>
      <div>
        <ul className="buttons">
          <li>
            <button onClick={() => navigate("/adminCustomerListPage")}>
              List of Customers
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/adminPurchasesPage")}>
              Archive of All Customer Purhases
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHomePage;
