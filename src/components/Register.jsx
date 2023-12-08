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

  // 1. I want to have a PW-validation - compate the two PW fields.
  //    If they match a new user is possible. 
  // 2. I want the user name and email to be unique.
  //    Compare to the jsn server. If the code can't find a matching username or email then a new user is possible.
  // 3. Submitt this function to the onClick funktion that will execute these validations.


  const handleSubmit = async (e) => { // Assign this function to button onClick
    e.preventDefault();

      // const confirmPassword = () => { // Password validation - a match is required to create a new user.   
        // password1 = form.password1.value;
        // password2 = form.password2.value;
    
        // if (password1 === "") {
        //   alert ("Please enter password");
        //   return;
        // } else if (password2 === "") {      
        //   alert ("Please enter confirm password");
        //   return;
        // } else 
        if (password1 === password2) {
        
          try {
          const response = await axios.get("http://localhost:6001/users"); // await - response
            // console.log(response); // om det finns registrert ngt överhuvudtaget
            // console.log(response.data); // hittar "data" via console.log
            const users = response.data //users lista = response.data

          // const checkUser = (users) => { // specificerar vad jag kollar efter - check if the email and username is unique
            const user = users.find((user) => user.email === email | user.username === username);
            
          if (user) {
            alert("Username or email already exists. Please try again!");
          } else {
            console.log("i else satsen")
            const newUser = { username, email, password: password1 };
              axios.post("http://localhost:6001/users", newUser)  // "when this promise (API) is fullfilled.."
              .then(() => alert("User created!"));       // "then..run this"
              navigate("/");
          } 

          }
          catch (error) {
            console.log(error);
          }
        }
        else { 
          alert ("Passwords did not match. Please try again.");
        }
  }
      
        // setUser({ // update to empty strings
        //   username: "",
        //   email: "",
        //   password1: "",
        //   password2: "",
        // });
  
  

 
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
            // onFocus={() => setUsernameFocus(true)} //does this add anything?
            // onBlur={() => setUsernameFocus(false)} //does this add anything?
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
  )
};

export default Register;




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



    // const user = { username, email, password1, password2 };
    //       axios
    //           .post("http://localhost:6001/users", user) // "when this promise (API) is fullfilled.."
    //           .then(() => alert("User created!"));       // "then.."
      
    //         setUser({ // update to empty strings
    //           username: "",
    //           email: "",
    //           password1: "",
    //           password2: "",
    //         });