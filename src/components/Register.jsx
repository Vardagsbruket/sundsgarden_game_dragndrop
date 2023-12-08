// ==== REGISTER ACCOUNT ====
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Register.css";
// +++++ Added const navigate on this page after seeing the Login tutorial.
// Imported useNavigate to RegisterAccount
// Also imported RegisterAccount and added Route to app.jsx.

const Register = () => { // Three states - one for each input field 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();


  const confirmPassword = (passwords) => {
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == '')
      alert ("Please enter password");
    else if (password2 == '')
      alert ("Please enter confirm password");
    else if (password1 != password2) {
      alert ("\nPassword did not match: Please try again...")
      return false;
    }
  };

  const handleSubmit = async () => { // Assign this to button
    
    //   const user = await axios
    //   .get("/users")
    //   .then((res) => checkEmail(res.data, email));

    
    // if (user) { // if email already exists
    //   alert("User already exists!");
    // } else {  // else save this new user - by making a post-request
    //   const user = { username, email, password };
    //   axios.post("/users", user).then(alert("User created!"));
    //   navigate("../ProfilePage");
    // } */
    

      const checkUser = (users) => { // check if the email is unique
        const user = users.find((user) => user.email === email && user.username === username);
    
        if (user && user.email === email && user.username === username) {
          return alert("Username or email already exists. Please try again!");
        } else {
            const user = { username, email, password1, password2 };
            axios
                .post("http://localhost:6001/users", user) // when this promise (API) is fullfilled..
                .then(() => alert("User created!"));       // then
        
              setUser({ // update to empty strings
                username: "",
                email: "",
                password1: "",
                password2: "",
              });
          }
      };
  };

 
  return (
    <div className="container">
      <form className="form-container">
        <h1>Register User</h1>
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}  // added value to each state
            onChange={(e) => setUsername(e.target.value)} // added onChange to each state to be able to update the state (from input field)
            required
            onFocus={() => setUsernameFocus(true)} //does this add anything?
            onBlur={() => setUsernameFocus(false)} //does this add anything?
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password1}
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
        </label>
        <label>
          {/* // <span className={validMatch && matchPassword ? "valid" : "hide"}>
          // </span>
          // <span className={validMatch || !matchPassword ? "hide" : "invalid"}>
          // </span> */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>
        <button className="btn" type="submit" onClick={handleSubmit}>
          <p>Register Account</p>
        </button> 
      </form>
    </div>
  );
};

export default Register;