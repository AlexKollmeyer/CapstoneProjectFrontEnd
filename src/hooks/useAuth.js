import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue || typeof authContextValue !== "object") {
    return [null, null];
  }

  const { user, token } = authContextValue;
  /*   const role = user ? user.role : null;  */

  return [user, token /* role */];
};

export default useAuth;
