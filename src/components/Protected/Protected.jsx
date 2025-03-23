import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvideer";

const Protected = () => {
  const auth = useAuth();

  return auth.isAuthenticaded ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
