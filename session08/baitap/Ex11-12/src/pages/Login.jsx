import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h2>Login to your account</h2>
      <form>
        <label htmlFor="email">Your email</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@company.com"
          required
          autoComplete="email" // Thêm autocomplete cho email
        />{" "}
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          autoComplete="current-password" // Thêm autocomplete cho mật khẩu
        />{" "}
        <br />
        <button type="submit">Login</button> <br />
      </form>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
