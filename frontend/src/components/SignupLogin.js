import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupLogin.css';

function SignupLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      college,
      year,
      email,
      password,
    };

    if (!isLogin) {
      // const res = await fetch('http://localhost:5000/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData),
      // });
      // const data = await res.json();
      // alert(data.message || data.error);
      const res = await fetch('http://localhost:5000/api/auth/signup', {
  
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (res.ok && data.userId) {
      localStorage.setItem('userId', data.userId); // ✅ Save userId
      alert('Signup successful!');
      navigate('/onboarding');                      // ✅ Go to onboarding
    } else {
      alert(data.error || 'Signup failed');
    }


    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className="signup-login-wrapper">
      <div className="signup-form-box">
        <h2>{isLogin ? 'Welcome Back 👋' : 'Let’s Get You Onboard ✨'}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>College</label>
                <input
                  type="text"
                  placeholder="e.g. IIT Bombay"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Year of Study</label>
                <input
                  type="text"
                  placeholder="e.g. 2nd Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Make it cool & secure"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Just to be sure"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
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
