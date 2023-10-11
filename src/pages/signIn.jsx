import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../redux/features/users/userApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/users/userSlice";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, {data: userData, isError, isSuccess, error}] = useUserLoginMutation();


  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
      const user = { email, password}
      userLogin(user);
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
        <h4 className="sub-title">Log In</h4>
        <p className="text">Welcome back! Please enter your details.</p>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit} id="login-form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input required value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" 
            required value={password} onChange={(e)=> setPassword(e.target.value)} 
            id="exampleInputPassword1" placeholder="*********" />
          </div>
          <div className="form-group form-check">
            <div className="checkbox">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember
                for 30 days</label>
            </div>
            {/* <a href="#0">Forgot Password</a> */}
          </div>
          <button type="submit" className="btn btn-style-one" formAction="profile.html">
            Sign in
          </button>
          <button type="button" className="d-none btn btn-style-one google">
            <img src="assets/img/login/google.png" alt="google" />
            Sign in with Google
          </button>
        </form>
        <p className="sign-up-alt">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
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
}

export default SignIn;
