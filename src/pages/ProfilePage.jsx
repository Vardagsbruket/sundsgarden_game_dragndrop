import { ProfileDetails } from "../components/ProfileDetails";
import ProfileContent from '../components/Images/ProfileContent.png';
import "./ProfilePage.css";
import { Welcome } from "../components/Welcome";
import React, { useState } from 'react';
import Login from '../components/Login';



export const LoginState = () => {
  const [isLoggedIn, setIsLOggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogin = (username) => {
    setIsLOggedIn(true);
    setLoggedInUsername(username);
  }

  return (
    <div>
      {isLoggedIn ? (
        <Welcome username={loggedInUsername} />
      ) : (
        <Login onLogin ={handleLogin} />
      )}
    </div>
  );
};




export const ProfilePage = () => {
  return (
    <>
      <ProfileDetails />
      <Welcome/>
      <img className="ProfileContent" src={ProfileContent}/>
      

    </>
  );
};
