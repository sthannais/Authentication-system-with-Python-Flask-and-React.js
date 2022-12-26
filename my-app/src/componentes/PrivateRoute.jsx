import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = JSON.parse(window.sessionStorage.getItem("token"));
  console.log("aloha", token);

  //return !token && <Navigate to="/user/admin" />;
  return token ? children : <Navigate to="/login" />;
}
