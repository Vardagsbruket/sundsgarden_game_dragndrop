// ==== REGISTER ACCOUNT ====
import { useState } from "react";
//import axios from "axios";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";
import "./Buttton.css";
// +++++ Added const navigate on this page after seeing the Login tutorial.
// Imported useNavigate to RegisterAccount
// Also imported RegisterAccount and added Route to app.jsx.

const Register = () => { // Three states - one for each input field 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkEmail = (users) => { // check if the email is unique
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => { // Assign this to button
    const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    
    if (user) { // if email already exists
      alert("User already exists!");
    } else {  // else save this new user - by making a post-request
      const user = { username, email, password };
      axios.post("/users", user).then(alert("User created!"));
      navigate("../ProfilePage");
    }
  };

 
  return (
    <div className="container">
      {/* <Card> */}
      <form className="form-container">
        <h1>Register User</h1>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={username}  // added value to each state
            onChange={(e) => setUsername(e.target.value)} // added onChange to each state to be able to update the state (from input field)
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label> 
        <button className="btn" type="submit" onClick={handleSubmit}>
          <p>Register Account</p>
        </button> 
      </form>
      {/* </Card> */} 
    </div>
  );
};

export default Register;
