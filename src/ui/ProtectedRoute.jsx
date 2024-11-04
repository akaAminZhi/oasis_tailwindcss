import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // load auth user
  const { isLoading, isAuthenticated } = useUser();
  // console.log(isAuthenticated, user, isPending);
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  // while loading return spinner
  if (isLoading) return <Spinner></Spinner>;
  // if not auth user redirect to login page

  // render the all page
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
