import React from "react";
import { Navigate } from "react-router-dom";

const SingOut = () => {
  console.log("holiiiiiii");
  sessionStorage.removeItem("token");
  return <Navigate to="/login"></Navigate>;
};

export default SingOut;
