import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProfileDetails = () => {
  const { userId } = useParams();
  const { state } = useAuth();
  const { user } = state;
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("json server url")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Oops, there is a problem fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Username:</strong> {user.username}
              <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
