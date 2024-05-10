import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label>
            Username:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
