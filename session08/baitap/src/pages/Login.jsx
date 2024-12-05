import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h2>Login account</h2>
      <form action="">
        <label htmlFor="">Your Email</label> <br />
        <input type="email" placeholder="name@company.com" /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder="********" /> <br />
        <button type="submit">Login an account</button> <br />
        <p>
          Already have an account? <Link to={"#"}>Register here</Link>
        </p>
      </form>
    </div>
  );
}
