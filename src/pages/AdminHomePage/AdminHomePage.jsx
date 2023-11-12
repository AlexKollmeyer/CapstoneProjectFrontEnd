import { useNavigate, Link } from "react-router-dom";
const AdminHomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => navigate("/adminCustomerListPage")}>
            List of Customers{" "}
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/adminPurchasesPage")}>
            Archive of All Customer Purhases{" "}
          </button>
        </li>
      </ul>
      <h1>Welcome Admin</h1>
    </div>
  );
};

export default AdminHomePage;
