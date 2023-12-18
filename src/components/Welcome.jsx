import React from 'react';
import "./Welcome.css";
import "./Button.css";
import profileFrame from '../components/Images/profileFrame.png';

export const DisplayUser = ({ }) => {
  const userName = JSON.parse(localStorage.getItem("userName"))//get username from local storage, without the quotes
  const userEmail = JSON.parse(localStorage.getItem("userEmail"))//get user email from local storage, without the quotes
    return (
      <div>
        <img className="profileFrame" src={profileFrame}/>
        <h1 className="DisplayName"> {userName}</h1>
        <h1 className="DisplayEmail"> {userEmail}</h1>
        <button className='btn'>Edit Profile</button>
      </div>
    );
  };