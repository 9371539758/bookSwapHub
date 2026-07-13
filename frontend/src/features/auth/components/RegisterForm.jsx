import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../state/auth.thunk";
import "../styles/register.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(formData));
  };

return (
  <div className="register">

    <form 
      className="register__form"
      onSubmit={handleSubmit}
    >

      <h2>Create Account</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />


      <button disabled={loading}>
        {
          loading 
          ? "Registering..." 
          : "Register"
        }
      </button>


      {
        error && <p>{error}</p>
      }

    </form>

  </div>
);
};

export default RegisterForm;
