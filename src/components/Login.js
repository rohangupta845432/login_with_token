import React, { useRef, useState } from "react";
import Btn from "./btn.module.css";
const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const email = useRef();
  const password = useRef();

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
      email: email.current.value,
      passwordInput: email.current.value,
    };
    setIsSubmit(true);
    console.log(inputValue);
    setIsSubmit(false);
  };

  return (
    <div className="login">
      <div>
        <h3>Login System</h3>
        <form onSubmit={onLoginSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={email} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" ref={password} />
          </div>
          {isSubmit && "Login Is in Process."}
          <button type="submit" className={Btn.btn_red}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
