import Group_7 from "/Group_7.svg";
import Component_4 from "/Component_4.png";
import lock from "/lock.svg";
import envlope2 from "/envlope2.svg"; // Corrected spelling
import castle from "/castle.svg";
import danger from "/danger.png";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Checkbox from "/Checkbox.png";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPassword: "",
    schoolConfirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Reset error on change
  };

  // Toggle checkbox state
  const toggleCheckbox = () => setIsChecked((prev) => !prev);

  // Form validation function
  const validateForm = () => {
    const { schoolName, schoolEmail, schoolPassword, schoolConfirmPassword } = formData;
    let validationErrors = {};

    if (!schoolName) {
      validationErrors.schoolName = (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> School name is required
        </span>
      );
    }
    if (!schoolEmail) {
      validationErrors.schoolEmail = (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> Email is required
        </span>
      );
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(schoolEmail)) {
        validationErrors.schoolEmail = (
          <span className="red-error">
            <img src={danger} alt="Error Icon" /> Invalid email address. Try again.
          </span>
        );
      }
    }
    if (!schoolPassword) {
      validationErrors.schoolPassword = (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> Password is required
        </span>
      );
    } else if (schoolPassword.length < 8) {
      validationErrors.schoolPassword = (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> Password must be at least 8 characters long
        </span>
      );
    }
    if (!schoolConfirmPassword) {
      validationErrors.schoolConfirmPassword = (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> Please confirm your password
        </span>
      );
    } else if (schoolPassword !== schoolConfirmPassword) {
      validationErrors.schoolConfirmPassword = 
      (
        <span className="red-error">
          <img src={danger} alt="Error Icon" /> Re-enter the password correctly.
        </span>
      );
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  // Form submission handler
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { schoolName, schoolEmail, schoolPassword } = formData;

    try {
      const response = await axios.post(
        "https://edudesks.onrender.com/api/auth/register",
        { name: schoolName, email: schoolEmail, password: schoolPassword }
      );

      console.log(response.data.message);
      localStorage.setItem("authToken", response.data.token);
      navigate("/sign-in");
    } catch (error) {
      console.error(error.response?.data?.error || "Registration failed");
    }
  };

  return (
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
              <Link to="/login">Login</Link>
            </div>

            <form onSubmit={handleRegister}>
              {/* School Name */}
              <div className="signup-details">
                <p>School Name</p>
                <div className={`input-container ${errors.schoolName ? 'show-red' : ''}`}>
                  <img src={castle} alt="Castle Icon" />
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter your school name"
                  />
                </div>
                {errors.schoolName && <p className="error-message">{errors.schoolName}</p>}
              </div>

              {/* School Email */}
              <div className="signup-details">
                <p>School Email</p>
                <div className={`input-container ${errors.schoolEmail ? 'show-red' : ''}`}>
                  <img src={envlope2} alt="Envelope Icon" />
                  <input
                    type="email"
                    name="schoolEmail"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                    placeholder="Enter your school email"
                  />
                </div>
                {errors.schoolEmail && <p className="error-message">{errors.schoolEmail}</p>}
              </div>

              {/* Password */}
              <div className="signup-details">
                <p>Choose Password</p>
                <div className={`input-container password ${errors.schoolPassword ? 'show-red' : ''}`}>
                  <img src={lock} alt="Lock Icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="schoolPassword"
                    value={formData.schoolPassword}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <div className="eyeIcon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash className="icon-eye"/> : <FaEye className="icon-eye"/>}
                  </div>
                </div>
                {errors.schoolPassword && <p className="error-message">{errors.schoolPassword}</p>}
              </div>

              {/* Confirm Password */}
              <div className="signup-details">
                <p>Confirm Password</p>
                <div className={`input-container password ${errors.schoolConfirmPassword ? 'show-red' : ''}`}>
                  <img src={lock} alt="Lock Icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="schoolConfirmPassword"
                    value={formData.schoolConfirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  <div className="eyeIcon" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <FaEyeSlash className="icon-eye"/> : <FaEye className="icon-eye"/>}
                  </div>
                </div>
                {errors.schoolConfirmPassword && <p className="error-message">{errors.schoolConfirmPassword}</p>}
              </div>

              {/* Checkbox */}
              <div className="draft">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  style={{ cursor: "pointer" }}
                />
                <p>Save drafts</p>
              </div>

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
