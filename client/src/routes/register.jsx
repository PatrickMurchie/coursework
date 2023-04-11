import { Outlet, Link } from "react-router-dom";

import React from 'react';

export default function Register() {
  return (
    <div>
      {/* Your registration form */}
      <form>
        <h2>Register</h2>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button type="submit">Register</button>
        <label>
            <Link to={'/login'}>Login</Link>
        </label>
        <label>
            <Link to={'/home'}>Home</Link>
        </label>
      </form>

      {/* Styling for the registration form */}
      <style>{`
        h2{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;        
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        label {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }

        input[type="email"],
        input[type="password"] {
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
          box-sizing: border-box;
        }

        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}