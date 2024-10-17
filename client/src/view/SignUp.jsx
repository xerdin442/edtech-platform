import Group_7 from "/Group_7.svg";
import Component_4 from "/Component_4.png";
import lock from "/lock.svg";
import envlope2 from "/envlope2.svg";
import castle from "/castle.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Checkbox from "/Checkbox.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); 

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const toggleCheckbox = () => setIsChecked(!isChecked); 

  return (
    <>
      <section className="signUp">
        <div className="signUp-div">
          <div className="side-1">
            <header className="signUp-header">
              <img src={Group_7} alt="Landing Page Icon" />
              <p>
                du<span>desks</span>.
              </p>
            </header>
            <img
              src={Component_4}
              alt="Component Illustration"
              className="illustration"
            />
          </div>

          <div className="side-2">
            <section className="formSection">
              <h4>Create an account</h4>

              <div className="already-container">
                <p>Already have an account?</p>
                <a href="/login">Login</a>
              </div>

              <form>
                {/* School Name */}
                <div className="signup-details">
                  <p>School Name</p>
                  <div className="input-container">
                    <img src={castle} alt="Castle Icon" />
                    <input type="text" placeholder="Enter your school name" />
                  </div>
                </div>

                {/* School Email */}
                <div className="signup-details">
                  <p>School Email</p>
                  <div className="input-container">
                    <img src={envlope2} alt="Envelope Icon" />
                    <input type="email" placeholder="Enter your school email" />
                  </div>
                </div>

                {/* Password */}
                <div className="signup-details">
                  <p>Choose Password</p>
                  <div className="input-container password">
                    <div className="forPassword1">
                    <img src={lock} alt="Lock Icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    </div>
                    <div className="eyeIcon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="signup-details">
                  <p>Confirm Password</p>
                  <div className="input-container password">
                    <div className="forPassword1">
                    <img src={lock} alt="Lock Icon" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                    />
                    </div>
                    <div
                      className="eyeIcon"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>

                {/* Checkbox with Tick */}
                <div
                  className="draft"
                  onClick={toggleCheckbox}
                  
                >
                  <img src={Checkbox} alt="Checkbox" style={{ cursor: "pointer" }}/>
                  <span>{isChecked?<FaCheck style={{color:"green"}}/> : ""}</span>
                  <p>Save drafts</p>
                </div>

                <div className="btnContainer">
                <button>Create account</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>

      {/* Optional: CSS Styling */}
      {/* <style jsx>{`
        .checkbox-container {
          display: flex;
          align-items: center;
        }

        .checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
        }

        .checked {
          background-color: #e0ffe0;
          border-color: green;
        }
      `}</style> */}
    </>
  );
};

export default SignUp;
