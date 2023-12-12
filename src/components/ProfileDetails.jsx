import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProfileDetails = () => {
  const [users, setUsers] = useState ([]);
  useEffect(() => {
    axios.get ('json server url')
    .then(response=> {
      setUsers(response.data);
    })
    .catch(error => { console.error('Oops, there is a problem fetching data:', error);
  });
  }, []);
  
  return <div></div>;
};
