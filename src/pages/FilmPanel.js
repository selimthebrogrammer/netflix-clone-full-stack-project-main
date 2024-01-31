import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import dynastyPoster from "./netflix-clone-19.png";
import emilyInParisPoster from "./netflix-clone-20.png";
import anneWithAnEPoster from "./netflix-clone-21.png";
import janeTheVirginPoster from "./netflix-clone-22.png";
import behindHerEyesPoster from "./netflix-clone-23.png";
import SixthFilm from "./netflix-clone-24.png";
import SeventhFilm from "./netflix-clone-25.png";
import EighthFilm from "./netflix-clone-26.png";
import NinethFilm from "./netflix-clone-27.png";
import TenthFilm from "./netflix-clone-28.png";
import EleventhFilm from "./netflix-clone-29.png";
import TwelfthFilm from "./netflix-clone-30.png";

// ... Diğer posterler için benzer importlar

const Container = styled.div`
  padding: 20px 5%; // Yüzdelik bir değer daha responsive olacaktır
  background-color: #111;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #e50914; // Renk kodunu Netflix logosunun rengine göre ayarladım
  padding-left: 5px;
  padding-top: 20px;
  margin-bottom: 10px; // Başlıklar arasında biraz daha boşluk ekledim
`;

const Row = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  position: relative;
  padding: 10px 0;
  scroll-behavior: smooth; // Yavaşça kaydırma efekti

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.img`
  width: 18vw;
  height: auto;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    width: 40vw;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column; // Bu satırı ekledik
  position: relative;
`;

const buttonStyles = css`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  // Burası değişti: Butonları büyük ekranlarda gizliyoruz
  @media (min-width: 769px) {
    display: none;
  }
`;

const ScrollButtonLeft = styled.button`
  ${buttonStyles};
  left: 0;
`;

const ScrollButtonRight = styled.button`
  ${buttonStyles};
  right: 0;
`;

const RowContainer = styled.div`
  position: relative;
  margin-top: 10px;
`;

function NetflixPanel() {
  const [filmCategories, setFilmCategories] = useState([]);
  const rowRefs = useRef([]);

  const handleScroll = (direction, rowIndex) => {
    const row = rowRefs.current[rowIndex];
    if (direction === "left") {
      row.scrollLeft -= row.offsetWidth / 2;
    } else if (direction === "right") {
      row.scrollLeft += row.offsetWidth / 2;
    }
  };

  const showHideButtons = (rowIndex) => {
    const row = rowRefs.current[rowIndex];
    // Her kategorinin wrapper'ını bul
    const categoryWrapper = row.parentNode;
    const scrollButtonLeft = categoryWrapper.querySelector(
      "button:first-of-type"
    );
    const scrollButtonRight = categoryWrapper.querySelector(
      "button:last-of-type"
    );

    // Sağa veya sola maksimum kaydırılmış mı kontrol et
    if (row.scrollLeft === 0) {
      scrollButtonLeft.style.display = "none";
    } else {
      scrollButtonLeft.style.display = "flex";
    }

    if (row.scrollWidth - row.scrollLeft === row.clientWidth) {
      scrollButtonRight.style.display = "none";
    } else {
      scrollButtonRight.style.display = "flex";
    }
  };
  useEffect(() => {
    const dummyCategories = [
      {
        title: "Bingeworthy International TV Shows",
        films: [
          { title: "Dynasty", poster: dynastyPoster },
          { title: "Emily in Paris", poster: emilyInParisPoster },
          { title: "Jane The Virgin", poster: janeTheVirginPoster },
          { title: "Behind Her Eyes", poster: behindHerEyesPoster }
          // ... Diğer film verileri eklenebilir...
        ]
      },
      {
        title: "Heat Packs for My Heart",
        films: [
          { title: "Anne with an E", poster: anneWithAnEPoster },
          { title: "Sixth Film", poster: SixthFilm },
          { title: "Seventh Film", poster: SeventhFilm },
          { title: "Eighth Film", poster: EighthFilm }
          // ... Diğer film verileri eklenebilir...
        ]
      },
      {
        title: "Popular on Netflix",
        films: [
          { title: "Eighth Film", poster: EighthFilm },
          { title: "Nineth Film", poster: NinethFilm },
          { title: "Tenth Film", poster: TenthFilm },
          { title: "Eleventh Film", poster: EleventhFilm }
        ]
      }
      // Daha fazla kategori ve film verisi eklenebilir...
    ];
    setFilmCategories(dummyCategories);
    rowRefs.current.forEach((_, index) => showHideButtons(index));

    // Her kategori için kaydırma olayını dinle ve butonları güncelle
    rowRefs.current.forEach((row, index) => {
      row.onscroll = () => showHideButtons(index);
    });
  }, []);

  return (
    <Container>
      {filmCategories.map((category, index) => (
        <TitleContainer key={index}>
          <Title>{category.title}</Title>
          <RowContainer>
            <ScrollButtonLeft onClick={() => handleScroll("left", index)}>
              ←
            </ScrollButtonLeft>
            <Row ref={(el) => (rowRefs.current[index] = el)}>
              {category.films.map((film, idx) => (
                <Poster key={idx} src={film.poster} alt={film.title} />
              ))}
            </Row>
            <ScrollButtonRight onClick={() => handleScroll("right", index)}>
              ➔
            </ScrollButtonRight>
          </RowContainer>
        </TitleContainer>
      ))}
    </Container>
  );
}

export default NetflixPanel;
