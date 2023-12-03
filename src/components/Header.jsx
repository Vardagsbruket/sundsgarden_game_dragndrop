import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1>IMAGINARIUM</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/create-account">Create Account</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};
