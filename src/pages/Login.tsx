import "./css/Login.css";

const Login = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-con">
        <h1>Sign up</h1>
        <div className="signup-feild">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>continue</button>
          <div className="login-img">
            <img src="/rickandmortycover.png" alt="" />
          </div>
          <p className="login">
            Already have an account?<span>Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
