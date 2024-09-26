import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type Props = {
    element: React.ReactElement
}

const AdminRoute = ({ element }: Props) => {
  const { isAdmin } = useAuth(); 
  const role = localStorage.getItem('role');

  return role === 'admin' ? element : <Navigate to="/" />;
};

export default AdminRoute;
