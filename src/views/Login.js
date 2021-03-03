import React, { useState } from "react";
import Input from "../components/input/Input";
import "../assets/style/login.scss";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log("Submitted!");
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-12">
            <Input
              type="text"
              id="email"
              placeholder="Email"
              onInput={(email) => setEmail(email)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              type="password"
              id="password"
              placeholder="Password"
              onInput={(password) => setPassword(password)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
