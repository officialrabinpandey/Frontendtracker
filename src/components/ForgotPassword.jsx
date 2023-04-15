import React, { useState } from "react";
import "./ForgotPassword.css"
function ForgotPassword() {
  const [email, setEmail] = useState("");
  console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle password reset request here
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
