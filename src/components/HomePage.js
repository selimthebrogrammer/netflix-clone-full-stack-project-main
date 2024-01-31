import React, { useState } from "react";
import styled from "styled-components";
import NetflixLogo from "./Logonetflix.png";
import NetflixBackground from "./background.jpg";
import TelevisionImage from "./tv.png";
import VideoSource from "./video-tv-0819.mp4";
import TelevisionImage2 from "./devices.png";
import VideoSource2 from "./video-devices.mp4";
import StrangerThingsPoster from "./boxshot.png"; // Bu resmi eklemeniz gerekiyor.
import DownloadGif from "./download-icon.gif"; // Bu GIF'i
import DownloadImage from "./mobile-0819.jpg";

const mobile = "576px";
const tablet = "768px";
const desktop = "992px";
const largeDesktop = "1200px";

const HomePageContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url(${NetflixBackground}) no-repeat center;
  background-size: cover;
  padding: 5rem 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  background-color: black;
  padding: 5rem 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TelevisionContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 60vw;

  &::before {
    content: "";
    background: url(${(props) => props.televisionImage}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 700px;
    height: 500px;
  }

  @media (min-width: ${desktop}) {
    width: 900px;
    height: 700px;
  }
`;

const InnerVideo = styled.video`
  width: 67%; // Televizyonun içine sığdırmak için
  height: 60%; // Televizyonun içine sığdırmak için
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${mobile}) {
    width: 80%;
    height: 70%;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 70%;
    height: 62%;
  }
`;

const TelevisionContainer2 = styled(TelevisionContainer)`
  &::before {
    content: "";
    background: url(${(props) => props.televisionImage}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;
const InnerVideo2 = styled(InnerVideo)`
  width: 50%; // Televizyonun içine sığdırmak için
  height: 60%; // Televizyonun içine sığdırmak için
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${mobile}) {
    top: 40%;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    top: 38%;
  }
`;

const Logo = styled.img`
  width: 60%;
  margin-bottom: 3rem;

  @media (min-width: ${tablet}) {
    width: 40%;
  }

  @media (min-width: ${desktop}) {
    width: 250px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (min-width: ${tablet}) {
    font-size: 4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 5rem;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Genişlik arttırılarak daha geniş bir alanda gösterim sağlandı.
  margin-top: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 500;
  padding: 1.5rem 0;
  white-space: pre-line;
  word-wrap: break-word;

  // Padding eklenerek yükseklik arttırılır.

  &:after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0; // Sol kenardan başlaması için 0 değeri verildi.
    width: 100%; // Tam satırı kaplaması için %100 değeri verildi.
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:last-child:after {
    display: none;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.5rem;
  }
`;

const DescriptionTop1 = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 500;
  padding: 1.5rem 0;
`;
const DescriptionTop2 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 500;
  padding: 1.5rem 0;
`;
const HorizontalRule = styled.div`
  width: 100%; // Uzunluk ayarlaması yapıldı. İsteğe göre değiştirilebilir.
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5); // Renk ayarı yapıldı.
  margin: 2rem auto; // Otomatik merkezleme ve üstten-boşluk ayarı yapıldı.
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
`;

const EmailInput = styled.input`
  padding: 1.2rem;
  border: 2px solid #e50914;
  border-radius: 4px;
  font-size: 1.3rem;
  width: 45%;
  margin-right: 0.8rem;
  @media (max-width: ${mobile}) {
    width: 70%;
  }

  @media (min-width: ${tablet}) {
    width: 50%;
  }

  @media (min-width: ${desktop}) {
    width: 45%;
  }
`;

const SubscribeButton = styled.button`
  padding: 1.2rem 2.5rem;
  border: none;
  background-color: #e50914;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.2s;
  font-weight: bold;

  &:hover {
    background-color: #f5131e;
  }
`;

const GetStartedButton = styled.button`
  background-color: #e50914;
  color: #fff;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f40612;
  }
`;

const FAQContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const FaqTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const FAQItem = styled.div`
  background-color: gray;
  border: 1px solid #333;
  padding: 1.2rem 2rem;
  margin-bottom: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D3D3D3;
  }
  line-height: 1.5rem;

&::after {
  content: "${(props) => (props.isOpen ? "-" : "+")}";
  position: absolute;
  right: 2rem;
  top: 50%;  // Center it vertically
  transform: translateY(-50%);  // Offset it by half its height to truly center
  font-size: 1.5rem;
  line-height: 1; 
}
`;

const FAQContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: gray;
  border-top: 1px solid #333;
  padding: 1.2rem 2rem;
  margin-bottom: 0.5rem;
  margin-top: -10px;
`;
const Question = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  display: ${({ open }) => (open ? "block" : "none")};
  white-space: pre-line;
  word-wrap: break-word;
`;

const FaqText = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const PlusSign = styled.span`
  font-size: 1.5rem;
`;

const OfflineContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url(${DownloadImage}) no-repeat left center;
  background-size: cover;
  padding: 5rem 5%;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const OfflineCard = styled.div`
  background-color: #000;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Added shadow for a better visual effect

  @media (max-width: ${mobile}) {
    flex-direction: column; // Stacks items vertically on mobile for better responsiveness
    align-items: center;
    text-align: center;
  }
`;

const OfflineImage = styled.img`
  width: 60px;
  height: 90px;
  margin-right: 1rem;
`;

const OfflineTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OfflineMainText = styled.span`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;

const OfflineSubText = styled.span`
  font-size: 0.9rem;
  color: white;
`;

const AnimatedGif = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 2rem;
`;

function AnaSayfa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const faqItems = [
    {
      question: "Netflix nedir?",
      answer: `Netflix, her türlü cihazda sınırsız film, dizi ve belgesel izlemenizi sağlayan bir yayın hizmetidir.
  
  Birçok film, dizi ve belgeseli orijinal içerikler arasından dilediğiniz zaman, dilediğiniz yerde, dilediğiniz kadar izleyebilirsiniz.`
    },
    {
      question: "Netflix'in maliyeti nedir?",
      answer: `Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin.
      
      Aylık plan ücretleri 99,99 TL ile 199,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.

      `
    },
    {
      question: "Nerede İzleyebilirim ?",
      answer: `İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.

      Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.
      `
    },
    {
      question: "Nasıl İptal Ederim ?",
      answer: `Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.
      `
    },
    {
      question: "Netflix'te ne izleyebilirim ?",
      answer: `Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.
      `
    },
    {
      question: "Netflix çocuklar için uygun mudur ?",
      answer: `Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir.

      Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz.
      `
    }
  ];

  return (
    <HomePageContainer>
      <TopContainer>
        <Logo src={NetflixLogo} alt="Netflix Logo" />
        <Title>Herkes burada!</Title>
        <DescriptionContainer>
          <DescriptionTop1>
            Favori oyuncunuz, en yakın arkadaşınız, karşı komşunuz. Tabii
            filmin, dizinin ve belgeselin âlâsı da.
          </DescriptionTop1>
          <DescriptionTop2>
            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
            için tek yapmanız gereken e-posta adresinizi girmek.
          </DescriptionTop2>
          <EmailInputContainer>
            <EmailInput
              type="email"
              placeholder="E-mail adresiniz..."
              required
            />
            <SubscribeButton>Başlayın > </SubscribeButton>
          </EmailInputContainer>
        </DescriptionContainer>
      </TopContainer>

      <BottomContainer>
        <DescriptionContainer className="row">
          {[
            {
              text: `Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.`,
              hasTelevision: true,
              televisionImage: TelevisionImage,
              videoSource: VideoSource,
              TelevisionContainerComponent: TelevisionContainer,
              InnerVideoComponent: InnerVideo
            },
            {
              text: `En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.`,
              hasOffline: true
            },
            {
              text: `Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.`,
              hasTelevision: true,
              televisionImage: TelevisionImage2,
              videoSource: VideoSource2,
              TelevisionContainerComponent: TelevisionContainer2,
              InnerVideoComponent: InnerVideo2
            },
            `Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.

            `
          ].map((item, index) => {
            if (typeof item === "object" && item.hasTelevision) {
              const TelevisionComp = item.TelevisionContainerComponent;
              const VideoComp = item.InnerVideoComponent;
              return (
                <Description className="col-12 col-md-10 col-lg-8 mx-auto">
                  {item.text}
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <TelevisionComp televisionImage={item.televisionImage}>
                        <VideoComp autoPlay loop muted>
                          <source src={item.videoSource} type="video/mp4" />
                        </VideoComp>
                      </TelevisionComp>
                    </div>
                  </div>
                </Description>
              );
            } else if (typeof item === "object" && item.hasOffline) {
              return (
                <Description className="col-12 col-md-10 col-lg-8 mx-auto">
                  {item.text}
                  <OfflineContainer>
                    <OfflineCard>
                      <OfflineImage
                        src={StrangerThingsPoster}
                        alt="Stranger Things Poster"
                      />
                      <OfflineTextContainer>
                        <OfflineMainText>Stranger Things</OfflineMainText>
                        <OfflineSubText>Downloading...</OfflineSubText>
                      </OfflineTextContainer>
                      <AnimatedGif src={DownloadGif} alt="Loading Gif" />
                    </OfflineCard>
                  </OfflineContainer>
                </Description>
              );
            } else {
              return <Description key={index}>{item}</Description>;
            }
          })}
        </DescriptionContainer>

        <HorizontalRule />
        <FAQContainer>
          <FaqTitle>Sıkça Sorulan Sorular</FaqTitle>
          {faqItems.map((item, index) => (
            <div key={index}>
              <FAQItem
                onClick={() => toggleItem(index)}
                isOpen={openIndex === index}
              >
                <FaqText>{item.question}</FaqText>
              </FAQItem>
              <FAQContent isOpen={openIndex === index}>
                <Answer open={openIndex === index}>{item.answer}</Answer>
              </FAQContent>
            </div>
          ))}
        </FAQContainer>

        <EmailInputContainer>
          <EmailInput type="email" placeholder="E-posta adresi" />
          <SubscribeButton>Başlayın</SubscribeButton>
        </EmailInputContainer>
      </BottomContainer>
    </HomePageContainer>
  );
}

export default AnaSayfa;
