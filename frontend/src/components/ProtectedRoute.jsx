import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLoggedIn,checkAuth } = useAuthStore();
  useEffect(()=>{
    checkAuth();
  },[isLoggedIn])

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;