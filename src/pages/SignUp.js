import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { Link } from "react-router-dom";
import {
  userSignUpRequest,
  userSignUpSuccess,
  userSignUpFailure
} from "../store/actions/userActions";
import { signUp } from "../utils/api";
import NetflixLogo from "./Logonetflix.png";
import NetflixBackground from "./background.jpg";

const SignUpContainer = styled.div`
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

const SignUpForm = styled.form`
  width: 320px;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SignUpText = styled.p`
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

function SignUp() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    dispatch(userSignUpRequest(userData));
    try {
      const response = await signUp(userData);
      dispatch(userSignUpSuccess(response));
    } catch (error) {
      dispatch(userSignUpFailure(error));
    }
  };

  return (
    <SignUpContainer>
      <Logo src={NetflixLogo} alt="Netflix Logo" />
      <SignUpForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="İsim"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="E-posta"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Şifreyi Onayla"
          value={userData.confirmPassword}
          onChange={(e) =>
            setUserData({ ...userData, confirmPassword: e.target.value })
          }
        />
        <Button type="submit">Kayıt Ol</Button>
      </SignUpForm>
      <SignUpText>
        Zaten üye misiniz? <Link to="/login">Giriş yapın</Link>
      </SignUpText>
    </SignUpContainer>
  );
}

export default SignUp;
