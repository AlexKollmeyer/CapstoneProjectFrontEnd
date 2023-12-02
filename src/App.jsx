// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WishListPage from "./pages/WishListPage/WishListPage/WishListPage";
import PurchaseArchivePage from "./pages/PurchaseArchivePage/PurchaseArchivePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BrowsingPage from "./pages/BrowsingPage/BrowsingPage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import AdminPurchasesPage from "./pages/AdminPurchasesPage/AdminPurchasesPage";
import AdminCustomerListPage from "./pages/AdminCustomerListPage/AdminCustomerListPage";
import CustomersWishListPage from "./pages/CustomersWishListPage/CustomersWishListPage";
import CustomerPurchaseArchivePage from "./pages/CustomerPurchaseArchivePage/CustomerPurchaseArchivePage";
import UnauthorizedPage from "./pages/UnauthorizedPage/UnauthorizedPage";
import StoresPage from "./pages/StoresPage/StoresPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/customersWishListPage/:customerId"
          element={
            <PrivateRoute
              /* roles={["Admin"]} */
              children={<CustomersWishListPage />}
            />
          }
        />
        <Route
          path="/customersPurchaseArchivePage/:customerId"
          element={
            <PrivateRoute>
              <CustomerPurchaseArchivePage /* roles={["Admin"]} */ />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminHomePage"
          element={
            <PrivateRoute /* roles={["Admin"]} */>
              <AdminHomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminPurchasesPage"
          element={
            <PrivateRoute /* roles={["Admin"]} */>
              <AdminPurchasesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminCustomerListPage"
          element={
            <PrivateRoute /* roles={["Admin"]} */>
              <AdminCustomerListPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="/wishListPage"
          element={
            <PrivateRoute>
              <WishListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/purchaseArchivePage"
          element={
            <PrivateRoute>
              <PurchaseArchivePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/searchPage"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/browsingPageResults"
          element={
            <PrivateRoute>
              <BrowsingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/storesPage"
          element={
            <PrivateRoute>
              <StoresPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
