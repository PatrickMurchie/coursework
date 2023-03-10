import { Outlet, Link } from "react-router-dom";

export default function Register() {
    return (
      <>
        <div id="sidebar">
          <h1>Home</h1>
          <div>
            <Link to={'/login'}>Login</Link>
          </div>
          <div>
            <Link to={'/signUp'}>Sign up</Link>
          </div>
        </div>
        <div id="detail"></div>
      </>
    );
  }
