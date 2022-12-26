import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/UserAdmin.css";
import { useNavigate } from "react-router-dom";
import singOut from "../helper/singOut";

const UserAdmin = () => {
  const navigate = useNavigate();
  const handleClickSingOut = () => {
    singOut();
    navigate("/login");
  };
  return (
    <div className="row gx-0">
      <div className="sidebar bg-danger col-md-2 p-3">
        <a
          href={{}}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
        >
          <span className="sidebar-title">Admin</span>
        </a>
        <div className="dropdown">
          <a
            href={{}}
            className="d-flex align-items-center link-light text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>Setting</strong>
          </a>
          <ul
            className="dropdown-menu bg-danger text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <div className="dropdown-item" onClick={handleClickSingOut}>
                Sing Out!
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <Outlet />
      </div>
    </div>
  );
};

export default UserAdmin;
