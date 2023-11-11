import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  console.log(authContextValue);

  if (!authContextValue || typeof authContextValue !== "object") {
    return [null, null];
  }

  const { user, token } = authContextValue;
  console.log(user);
  const role = user ? user.role : null; // Assuming user has a role property

  return [user, token, role];
};

export default useAuth;
