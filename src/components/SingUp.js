import React from "react";

const SingUp = () => {
  return (
    <div>
      <div>
        <h3>Sing Up System</h3>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </form>
      </div>
    </div>
  );
};

export default SingUp;
