// components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #000;
  color: #999;
  padding: 2rem 5%;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: #999;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CopyRight = styled.div``;

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="#">SSS</a>
        <a href="#">Yardım Merkezi</a>
        <a href="#">Hesap</a>
        <a href="#">Medya Merkezi</a>
        <a href="#">Yatırımcı İlişkileri</a>
        <a href="#">Kariyer Fırsatları</a>
        <a href="#">Hediye Kartları</a>
        <a href="#">Şartlar</a>
        <a href="#">Gizlilik</a>
        <a href="#">Tercihleriniz</a>
        <a href="#">Çerez Ayarları</a>
        <a href="#">Yasal Uyarılar</a>
      </FooterLinks>
      <CopyRight>© 2023 Netflix, Inc.</CopyRight>
    </FooterContainer>
  );
}

export default Footer;
