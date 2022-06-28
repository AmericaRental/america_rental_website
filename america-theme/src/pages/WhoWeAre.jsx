import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

import banner from "../images/whoweare_images/banner.svg";

const WhoWeAre = () => {
  const Img = styled.img`
    width: 100%;
    height: auto;
    z-index: -1;
    left: 0;
    top: 120px;
    position: absolute;
  `;
  const Banner = styled.div`
    width: 100%;
    position: initial;
    height: 50vh;
    display: flex;
    justify-content: left;
    align-items: center;
  `;
  const Title = styled.h1`
    font-family: "Inter";
    color: #fafafa;
    margin-left: 10%;
    font-size: 80px;
    letter-spacing: 0.03em;
  `;

  const NossaEmpresa = styled.article`
    width: 80%;
    margin: 0 auto;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  `;
  const Welcome = styled.p`
    font-size: 1.22rem;
    color: #969696;
    font-family: 'Inter';
    font-weight: 600;
    margin: 15px 0px 10px 0;
  `;

  const TitleOurCompany = styled.h1`
    font-size: 2.2rem;
    color: #1e547e;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    letter-spacing: 0.02em;
  `;

  return (
    <>
      <Header />
      <main>
        <Banner>
          <Title>Quem Somos</Title>
          <Img src={banner} alt="banner" />
        </Banner>
        <NossaEmpresa>
            <Welcome>SEJA MUITO BEM VINDO</Welcome>
            <TitleOurCompany>SOBRE NOSSA EMPRESA</TitleOurCompany>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          soluta vitae maxime esse eligendi nulla delectus possimus, est, error
          natus pariatur animi aspernatur. Alias odit fugit pariatur assumenda
          enim soluta.
        </NossaEmpresa>
      </main>
      <Footer />
    </>
  );
};

export default WhoWeAre;
