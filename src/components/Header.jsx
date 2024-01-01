import { NavLink, useParams } from "react-router-dom";
import "./Header.css";
import ProfilePhoto from "../components/Images/ProfilePhoto.png";
import { useAuth } from "./AuthProvider";

export const Header = () => {
  const { state } = useAuth();
  const { userId } = state;
  const userName = JSON.parse(localStorage.getItem("userName")); //get username from local storage, without the quotes
  console.log(userName); //check if it works

  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1 className="logo">IMAGINARIUM</h1>
        </NavLink>
      </div>
      <div className="navBar">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Log Out</NavLink>
        {/* Add function to log out */}
        <NavLink to={`/profile/${userId}`}>
          <img src={ProfilePhoto} alt="Profile Picture" />
          <p className="userName">{userName}</p>
        </NavLink>
      </div>
    </div>
  );
};
