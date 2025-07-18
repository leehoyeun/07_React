import axios from "axios";
import React, { useContext } from "react";
import "../css/Login.css";
import { AuthContext } from "./AuthContext";

function Login() {
  const globalState = useContext(AuthContext);

  return (
    <div className="login-container">
      <h1>KH BoardProject Admin</h1>
      <h2>로그인</h2>
      <form onSubmit={globalState.handleLogin}>
        <div className="form-group">
          <label htmlFor="username">이메일:</label>
          <input
            type="email"
            id="email"
            required
            value={globalState.email}
            onChange={globalState.changeInputEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            required
            value={globalState.password}
            onChange={globalState.changeInputPw}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
