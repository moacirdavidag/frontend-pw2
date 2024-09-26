import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminRoute = ({ element }) => {
  const { isAdmin } = useAuth(); 

  return isAdmin ? element : <Navigate to="/" />;
};

export default AdminRoute;
