import React, { useState, ChangeEvent, FormEvent } from "react";

interface Credentials {
  user_name: string;
  email: string;
  password: string;
}

const UserLogin: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    user_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Reset the form
        setCredentials({ user_name: "", email: "", password: "" });
      } else {
        console.log("Login failed:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default UserLogin;
