// import React, { useState } from 'react';
// import './SignupLogin.css';

// function SignupLogin() {
//   const [isLogin, setIsLogin] = useState(false);

//   return (
//     <section className="signup-login">
//       <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
//       <form>
//         {!isLogin && (
//           <>
//             <input type="text" placeholder="Full Name" required />
//             <input type="text" placeholder="College" required />
//             <input type="text" placeholder="Year of Study" required />
//           </>
//         )}
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         {!isLogin && <input type="password" placeholder="Confirm Password" required />}

//         <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
//       </form>

//       <p onClick={() => setIsLogin(!isLogin)} className="toggle">
//         {isLogin
//           ? "Don't have an account? Sign up"
//           : "Already got existential dread? Log in."}
//       </p>
//     </section>
//   );
// }

// export default SignupLogin;
