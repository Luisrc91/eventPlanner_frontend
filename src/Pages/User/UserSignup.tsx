import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  user_name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    user_name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`http://localhost:5000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    navigate(`/`);
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              required
              value={user.user_name}
              onChange={(e) => setUser({ ...user, user_name: e.target.value })}
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </main>
  );
};

export default SignUp;
