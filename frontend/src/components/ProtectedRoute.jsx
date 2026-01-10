import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first to continue booking");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
