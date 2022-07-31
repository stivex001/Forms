import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const username = sessionStorage.getItem("userName");
  return username ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
