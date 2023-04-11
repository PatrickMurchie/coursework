import { Outlet, Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <h2>Home</h2>
      <form>
        <label class="Page">
            <Link to={'/login'}>Log In</Link>
        </label>
        <label class="Page">
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

        .Page{
            background-color: #4CAF50;
            color: red;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
        }

        .page:hover{
          background-color: #45a049;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}