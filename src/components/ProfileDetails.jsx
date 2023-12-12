import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Welcome } from './Welcome';
import axios from 'axios';


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















export const ProfileDetails = () => {
  const [users, setUsers] = useState ([]);
  useEffect(() => {
    axios.get ('http://localhost:6001/users')
    .then(response=> {
      setUsers(response.data);
    })
    .catch(error => { console.error('Oops, there is a problem fetching data:', error);
  });
  }, []);

  return (
  <div>
    
      {users.map(user => (
        <p key={user.id}>
          <strong>Username:</strong> {user.username}<br />
        </p>
      ))}
   
  </div>
  );
};

