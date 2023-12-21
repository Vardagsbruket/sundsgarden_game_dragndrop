import { NavLink, useParams } from "react-router-dom";
import "./Header.css";
import { LogOutButton } from "./LogOutButton";
import ProfilePhoto from "../components/Images/ProfilePhoto.png";
import { useAuth } from "./AuthProvider";

export const Header = () => {
  const { state } = useAuth();
  const { userId } = state;
  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1 className="logo">IMAGINARIUM</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register-account">Create Account</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">
          <LogOutButton />
        </NavLink>
        <NavLink to={`/profile/${userId}`}>
          <img src={ProfilePhoto} alt="Profile Picture" />
        </NavLink>
      </div>
    </div>
  );
};
