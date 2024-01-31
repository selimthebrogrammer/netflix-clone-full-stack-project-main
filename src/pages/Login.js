import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { Link } from "react-router-dom";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure
} from "../store/actions/userActions";
import { login } from "../utils/api";
import NetflixLogo from "./Logonetflix.png";
import NetflixBackground from "./background.jpg";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url(${NetflixBackground});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 3rem;
`;

const LoginForm = styled.form`
  width: 320px;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LoginText = styled.p`
  color: #fff;
  text-align: center;
  margin-top: 2rem;

  a {
    color: #e50914;
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

function Login() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLoginRequest(loginData));
    try {
      const response = await login(loginData);
      dispatch(userLoginSuccess(response));
    } catch (error) {
      dispatch(userLoginFailure(error));
    }
  };

  return (
    <LoginContainer>
      <Logo src={NetflixLogo} alt="Netflix Logo" />
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-posta"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <Button type="submit">Giriş Yap</Button>
      </LoginForm>
      <LoginText>
        Şifrenizi mi unuttunuz? ya da <Link to="/signup">yeni üye ol</Link>
      </LoginText>
    </LoginContainer>
  );
}

export default Login;
