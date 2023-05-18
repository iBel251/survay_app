import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let { user } = useUserAuth();
  if (!user) {
    return navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
