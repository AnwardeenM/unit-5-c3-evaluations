
import {React} from "react";
import {Link} from "react-router-dom";
// import { ReactDOM } from "react-dom";

export const Navbar = () => {

  return (
    <div className="navbar">
      <h3>This is navbar component</h3>
      < Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to="/logout">
        Logout
      </Link>

      <Link className="nav-login" to="/login">
        Login
      </Link>
    </div>
  );
};
