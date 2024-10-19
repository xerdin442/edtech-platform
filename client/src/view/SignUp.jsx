import Group_7 from "/Group_7.svg";
import Component_4 from "/Component_4.png";
import lock from "/lock.svg";
import envlope2 from "/envlope2.svg"; 
import castle from "/castle.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPassword: "",
    schoolConfirmPassword: "",
  });
  const [backendError, setBackendError] = useState(""); 
  const navigate = useNavigate();

  // Toggle Password Visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission Handler
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://edudesks.onrender.com/api/auth/register",
        {
          name: formData.schoolName,
          email: formData.schoolEmail,
          password: formData.schoolPassword,
        }
      );

     
      localStorage.setItem("authToken", response.data.token);
      navigate("/opt-verify");
    } catch (error) {
   
      setBackendError(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <section className="signUp">
      <div className="signUp-div">
        <div className="side-1">
          <header className="signUp-header">
            <img src={Group_7} alt="Landing Page Icon" />
            <p>du<span>desks</span>.</p>
          </header>
          <img src={Component_4} alt="Component Illustration" className="illustration" />
        </div>

        <div className="side-2">
          <section className="formSection">
            <h4>Create an account</h4>

            <div className="already-container">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>

            <form onSubmit={handleRegister}>
              {/* School Name */}
              <div className="signup-details">
                <p>School Name</p>
                <div className="input-container">
                  <img src={castle} alt="Castle Icon" />
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter your school name"
                    required
                  />
                </div>
              </div>

              {/* School Email */}
              <div className="signup-details">
                <p>School Email</p>
                <div className="input-container">
                  <img src={envlope2} alt="Envelope Icon" />
                  <input
                    type="email"
                    name="schoolEmail"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                    placeholder="Enter your school email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="signup-details">
                <p>Choose Password</p>
                <div className="input-container password">
                  <img src={lock} alt="Lock Icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="schoolPassword"
                    value={formData.schoolPassword}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <div className="eyeIcon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash className="icon-eye" /> : <FaEye className="icon-eye" />}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="signup-details">
                <p>Confirm Password</p>
                <div className="input-container password">
                  <img src={lock} alt="Lock Icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="schoolConfirmPassword"
                    value={formData.schoolConfirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <div className="eyeIcon" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <FaEyeSlash className="icon-eye" /> : <FaEye className="icon-eye" />}
                  </div>
                </div>
              </div>

              {/* Backend Error Message */}
              {backendError && <p className="error-message">{backendError}</p>}

              {/* Submit Button */}
              <div className="btnContainer">
                <button type="submit">Create account</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
