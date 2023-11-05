// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WishListPage from "./pages/WishListPage/WishListPage/WishListPage";
import PurchaseArchivePage from "./pages/PurchaseArchivePage/PurchaseArchivePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchPage from "./pages/SearchPage/SearchPage";
import BrowsingPage from "./pages/BrowsingPage/BrowsingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
