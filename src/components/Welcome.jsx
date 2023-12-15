import React from 'react';
import "./Welcome.css";

export const Welcome = ({ }) => {
  const userName = JSON.parse(localStorage.getItem("userName"))//get username from local storage, without the quotes
    return (
      <div>
        <h1 className="Welcome">Welcome back, {userName}!</h1>
      </div>
    );
  };