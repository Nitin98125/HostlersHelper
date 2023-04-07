import "./auth.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth"; 

const LoginForm = () => {

  const { auth, setAuth } = useAuth();

  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const Login = async () => {
    try {
      const res = await axios.post("/login", { user: user });
      setAuth(res.data);
      navigation("/");
    } catch {
      alert("Invalid Credentials");
    }
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <div className="auth">
      <div className="form">
        <form>
          <div id="authform">
            <h1 className="login">Login</h1>
            <div className="btn_auth">
              <button id="google_auth">
                <img id="google_icon" srcSet="icon_google.svg" alt="" />
                <span id="gg">Google</span>
              </button>
            </div>
            <hr />
            <label id="or">or</label>
            <div className="Login">
              <div className="input">
                <label>Email Address</label>
                <br></br>
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                ></input>
                <label>Password</label>
                <br></br>
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                ></input>
              </div>
              <div id="nxt" onClick={Login}>
                Next
              </div>
              <br></br>
              <label id="signup">
                Don't have an account ?<Link to="/register">SignUp</Link>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="animation">
        <div className="content">
          <h1 id="logo" style={{ color: "rgb(60, 174, 18)" }}>
            <span style={{ fontWeight: 900 }}>Mess</span>Server
          </h1>
          <p id="cc">
            We are Here , To serve you
            <br />
            we serve both veg and non veg.
            <br />
          </p>
          <Link id="wtk" to="/">
            Want to know more about us ?
          </Link>
        </div>
        <img id="anim" srcSet="animation.png" alt="Unable to reload"></img>
      </div>
    </div>
  );
};

export default LoginForm;
