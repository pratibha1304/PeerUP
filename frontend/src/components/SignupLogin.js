import React, { useState } from 'react';
import './SignupLogin.css';

function SignupLogin() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="signup-login-wrapper">
      <div className="signup-form-box">
        <h2>{isLogin ? 'Welcome Back 👋' : 'Let’s Get You Onboard ✨'}</h2>

        <form>
          {!isLogin && (
            <>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. Priya Sharma" required />
              </div>
              <div className="input-group">
                <label>College</label>
                <input type="text" placeholder="e.g. IIT Bombay" required />
              </div>
              <div className="input-group">
                <label>Year of Study</label>
                <input type="text" placeholder="e.g. 2nd Year" required />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Make it cool & secure" required />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Just to be sure" required />
            </div>
          )}

          <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle">
          {isLogin
            ? "New to the chaos? Create an account"
            : "Already got existential dread? Log in."}
        </p>
      </div>
    </div>
  );
}

export default SignupLogin;

// import React from 'react';

// function SignupLogin() {
//   return (
//     <section className="signup-login">
//       <h1 style={{ color: 'red' }}>✅ This is the Signup/Login Page</h1>
//     </section>
//   );
// }

// export default SignupLogin;
