import { Outlet, link } from "react-router-dom";

export default function Register() {
    return (
      <>
        <div id="sidebar">
          <h1>Register</h1>
          <div>
            <a href={'/login'}>Login</a>
          </div>
          <div>
            <a href={'/signUp'}>Sign up</a>
          </div>
        </div>
        <div id="detail"></div>
      </>
    );
  }
