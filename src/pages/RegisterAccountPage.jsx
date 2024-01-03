import Register from "../components/registerAccount/Register";
import "../components/registerAccount/Register.css";
import { ImageRegister } from "../components/Elements/ImageRegister";

export const RegisterAccountPage = () => {
  return (
    <div className="page-container">
      <div className="register-container">
        <div className="registerImage">
          <ImageRegister />
        </div>
      </div>
      <div className="register-container">
        <h1 className="register-title">IMAGINARIUM</h1>
        <form className="register-form">
          <div className="register-option1">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={true}
                className="form-check-input"
              />
              <h3>Free game plan</h3> 
              <ul>
                <li>Unlimited access to one world</li>
              </ul>
            </label>
          </div>
          <div className="register-option2">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option2"
                className="form-check-input"
              />
              <h3>Premium game plan</h3>
              <ul>
                <li>Unlock more worlds</li>
                <li>Choose colour-theme</li>
                <li>Access more building blocks</li>
                <li>Keep track of your score and compete against others</li>
              </ul>
            </label>
          </div>
        </form>  
        <Register />
      </div>
    </div>
  );
};