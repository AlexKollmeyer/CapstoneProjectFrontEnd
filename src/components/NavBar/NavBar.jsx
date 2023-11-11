import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link
            to="/browsingPageResults"
            style={{ textDecoration: "none", color: "white" }}
          >
            <b>PixelSaverHQ</b>
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <button onClick={() => navigate("/searchPage")}>Search </button>
            </li>
            <li>
              <button onClick={() => navigate("/browsingPageResults")}>
                Browse
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/wishListPage")}>
                WishList
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/purchaseArchivePage")}>
                Purchase Archive
              </button>
            </li>
          </ul>
        </li>

        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
