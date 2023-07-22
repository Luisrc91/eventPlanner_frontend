import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUser";
import '../../css/signin.css'
interface Credentials {
  // user_name: string;
  email: string;
  password: string;
}

const UserLogin: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/authentication/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.status === 200) {
        console.log("Login successful:", data);
        // Reset the form
        setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        setErrorMessage(data.message);
        console.log("Login failed:", response.status);
      }
    } 
    catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="userLogin">
<main>
      <h1>Sign In</h1>
      {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
    </div>
    
  );
};

export default UserLogin;
