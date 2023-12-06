import { useState} from "react"; // uses the useState hook to add a variable to update the value.
import { useNavigate } from "react-router-dom"; //to allow users to access different components
import  ErrorLogin  from "./ErrorLogin";
//import axios from "axios";
import "./Login.css";
import axios from "axios";
// import Card from "./Card";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // to store and display any error messages
    const navigate = useNavigate();

    const checkUser = (users) => {  // Function to validate the user
        const user = users.find(
            (user) =>user.email === email && user.password === password);
            console.log(user)
            if (user.email === email && user.password === password)
        return user;
    };

    const handleSubmit = async (e) => {   
        e.preventDefault(); // prevent the default behavior of a form when it is submitted.
    
  
        if (email === "" || password === "" ){  // Ensure email and password are not empty. || equal or
            alert("All fields are required!");
            return;
        }

    
        try {  //checking if the login credentials are valid
            const response = await axios.get("/users");
            const user = checkUser(response.data);

            if (user) {
                successMessage(user);
            } else {
                errorMessage("Invalid username or password. Please try again!");
            }
        } catch (error) {
            console.error(error);
            errorMessage("An error occurred. Please try again later.");
        }
    };
    
    const successMessage = (user) => {
        alert(`Hi ${user.username}` );
        navigate(`/game/${user.id}`); //  access to the user's game page after login
        
        localStorage.setItem("user", JSON.stringify(user.id))
        
        setEmail("");
        setPassword("");
    };

    const errorMessage = (message) => {
        setError(message) //save error message
        navigate(`/register`); // lead to register once error happened
        
    };

    return( 
        <>
            {error && <ErrorLogin message={error} />}
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <label>
                    <input 
                        value={email}  
                        type="text" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                    /> 
                </label>
                <label >
                    <input 
                        value={password} 
                        type="Password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label> 
            </form>
            <div className="button-container">
                <button onClick={(handleSubmit)}>Log in</button>
                <p>or</p>
                <button onClick={() => navigate("/RegisterAccountPage")}>Create Account</button>
            </div>
        </>
    ); //onChange is used to listen for user input in a text input box., onFormSwitch to switch to other page
}; // Does our project require card functionality? We only have one user information that needs to be styled
export default Login;