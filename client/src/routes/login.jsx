import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>

        <label>
            <Link to={'/register'}>Sign up</Link>
        </label>
      </form>

      {/* Styling for the login form */}
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