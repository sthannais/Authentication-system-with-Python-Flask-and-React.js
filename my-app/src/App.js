import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import PeopleRegister from "./componentes/PeopleRegister";
import UserAdmin from "./componentes/UserAdmin";
import Profile from "./componentes/Profile";
import Settings from "./componentes/Profile";
import Forgot from "./componentes/Forgot";
import PrivateRoute from "./componentes/PrivateRoute";

const App = ({ copyright }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/people/register" element={<PeopleRegister />} />
        <Route path="/change/password" element={<Forgot />} />
        <Route
          path="/user/admin"
          element={
            <PrivateRoute>
              <UserAdmin />
            </PrivateRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
