import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/auth.thunk";
import "../styles/login.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div className="login-container">
      {/* Left Side - Image + Quote */}
      <div className="login-left">
        <div className="quote-overlay">
          <p className="wise-quote">A WISE QUOTE</p>
          <h1 className="main-text">
            Get<br />Everything<br />You Want
          </h1>
          <p className="sub-text">
            You can get everything you want if you work hard,<br />
            trust the process, and stick to the plan.
          </p>
        </div>
      </div>

      {/* Right Side - Form + Tech Animations */}
      <div className="login-right">
        {/* Floating Tech Elements */}
        <div className="tech-overlay">
          <div className="circuit-node node1"></div>
          <div className="circuit-node node2"></div>
          <div className="circuit-node node3"></div>
          <div className="circuit-line"></div>
        </div>

        <div className="form-wrapper">
          <div className="logo">
            {/* <span>🌐</span> Cogie */}
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">Enter your email and password to access your account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot">Forgot Password</a>
            </div>

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="google-btn"
              onClick={() => {
                window.location.href = "http://localhost:3000/api/auth/google";
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
              Sign In with Google
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          <p className="signup-link">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;