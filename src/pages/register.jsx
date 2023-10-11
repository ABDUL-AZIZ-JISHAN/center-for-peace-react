import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/error";
import {useUserRegisterMutation}  from "../redux/features/users/userApi" 
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/users/userSlice";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userRegister, {data: userData, isError, isSuccess, error}] = useUserRegisterMutation();


  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
    } else {
      const newUser = {name, email, password}
      userRegister(newUser);
    }
  };

  useEffect(()=>{
  if(isSuccess){
    dispatch(addUser(userData));
    navigate("/");
  }
  if(isError){
    setPasswordError(error.data)
  }
  },[isSuccess, isError])
  return (
    <section className="sign-in-section">
      {/* left login content */}
      <div className="left-content">
        <Link to="/" className="logo">
          <img src="assets/img/index/logo-color.png" alt="logo" />
        </Link>
        <div className="form-area">
          <div className="heading">
            <h2 className="title">Library of Peace</h2>
            <h4 className="sub-title">Register Now</h4>
            {/* <p className="text">Welcome back! Please enter your details.</p> */}
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit} id="login-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="*********"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  required
                  className="form-control"
                  placeholder="*********"
                />
              </div>
              <div className="form-group form-check">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember for 30 days
                  </label>
                </div>
                {/* <a href="#0">Forgot Password</a> */}
              </div>
              <button
                type="submit"
                className="btn btn-style-one"
                formAction="profile.html"
              >
                Register
              </button>
              <button type="button" className="d-none btn btn-style-one google">
                <img src="assets/img/login/google.png" alt="google" />
                Sign in with Google
              </button>
            </form>
            <p className="sign-up-alt">
              Have an account? <Link to="/signin">Sign In</Link>
            </p>
            {(passwordError|| isError) &&  <Error title={passwordError}/>}
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 Peace and Spirituality | All rights reserved.</p>
        </div>
      </div>
      {/* right login content */}
      <div className="right-content">
        <img src="assets/img/login//left-bg.png" alt="bg-img" />
      </div>
    </section>
  );
};

export default Register;
