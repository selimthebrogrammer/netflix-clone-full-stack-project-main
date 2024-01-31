import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";
import NetflixLogo from "./Logonetflix.png";
import { useSelector, useDispatch } from "react-redux"; // useSelector eklendi
import { userLogout } from "../../src/store/actions/userActions";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem 3%;
  }
`;

const Logo = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.8em;
  }
`;
function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Kullanıcının oturumunu sonlandır
    dispatch(userLogout());
    // Ana sayfaya yönlendir
    navigate("/");
  };

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo src={NetflixLogo} alt="Netflix Logo" />
      </StyledLink>
      <Navigation>
        {user ? (
          <>
            <StyledLink to="/film-panel">
              <StyledButton>Filmler ve Diziler</StyledButton>
            </StyledLink>
            <span style={{ color: "white" }}>{user.email}</span>
            <StyledButton onClick={handleLogout}>Çıkış Yap</StyledButton>
          </>
        ) : (
          <>
            <StyledLink to="/login">
              <StyledButton>Giriş Yap</StyledButton>
            </StyledLink>
            <StyledLink to="/signup">
              <StyledButton primary>Kayıt Ol</StyledButton>
            </StyledLink>
          </>
        )}
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
