import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn }) => {
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> && console.log("yea") : <Navigate to="/" />;
};

export default ProtectedRoute;