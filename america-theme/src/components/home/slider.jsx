import React from "react";
import styled from "styled-components";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/style.css";

import logo1 from "../../images/logo_parceiros/logo1.svg";
import logo2 from "../../images/logo_parceiros/logo2.svg";
import logo3 from "../../images/logo_parceiros/logo3.svg";
import logo4 from "../../images/logo_parceiros/logo4.svg";
import logo5 from "../../images/logo_parceiros/logo5.svg";
import logo6 from "../../images/logo_parceiros/logo6.svg";
import logo7 from "../../images/logo_parceiros/logo7.svg";
import logo8 from "../../images/logo_parceiros/logo8.svg";
import logo9 from "../../images/logo_parceiros/logo9.svg";
import logo10 from "../../images/logo_parceiros/logo10.svg";
import logo11 from "../../images/logo_parceiros/logo11.svg";
import logo12 from "../../images/logo_parceiros/logo12.svg";
import logo13 from "../../images/logo_parceiros/logo13.svg";
import logo14 from "../../images/logo_parceiros/logo14.svg";
import logo15 from "../../images/logo_parceiros/logo15.svg";
import logo16 from "../../images/logo_parceiros/logo16.svg";
import logo17 from "../../images/logo_parceiros/logo17.svg";
import logo18 from "../../images/logo_parceiros/logo18.svg";
import logo19 from "../../images/logo_parceiros/logo19.svg";
import logo20 from "../../images/logo_parceiros/logo20.svg";
import logo21 from "../../images/logo_parceiros/logo21.svg";
import logo22 from "../../images/logo_parceiros/logo22.svg";
import logo23 from "../../images/logo_parceiros/logo23.svg";
import logo24 from "../../images/logo_parceiros/logo24.svg";
import logo25 from "../../images/logo_parceiros/logo25.svg";
import logo26 from "../../images/logo_parceiros/logo26.svg";
import logo27 from "../../images/logo_parceiros/logo27.svg";
import logo28 from "../../images/logo_parceiros/logo28.svg";

export default function Slider() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    padding: 15px 0%;
  `;
  const H1 = styled.h1`
    font-family: "Inter";
    font-size: 26px;
    color: #143955;
    font-weight: 700;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
  `;
  return (
    <Div>
      <H1>Nossos parceiros e clientes</H1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          autoplay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo1} alt='logo parceiro'/>
          <img src={logo2} alt='logo parceiro'/>
          <img src={logo3} alt='logo parceiro'/>
          <img src={logo4} alt='logo parceiro'/>

        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} alt='logo parceiro'/>
          <img src={logo6} alt='logo parceiro'/>
          <img src={logo7} alt='logo parceiro'/>
          <img src={logo8} alt='logo parceiro'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo9} alt='logo parceiro'/>
          <img src={logo10} alt='logo parceiro'/>
          <img src={logo11} alt='logo parceiro'/>
          <img src={logo12} alt='logo parceiro'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo13} alt='logo parceiro'/>
          <img src={logo14} alt='logo parceiro'/>
          <img src={logo15} alt='logo parceiro'/>
          <img src={logo16} alt='logo parceiro'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo17} alt='logo parceiro'/>
          <img src={logo18} alt='logo parceiro'/>
          <img src={logo19} alt='logo parceiro'/>
          <img src={logo20} alt='logo parceiro'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo21} alt='logo parceiro'/>
          <img src={logo22} alt='logo parceiro'/>
          <img src={logo23} alt='logo parceiro'/>
          <img src={logo24} alt='logo parceiro'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo25} alt='logo parceiro'/>
          <img src={logo26} alt='logo parceiro'/>
          <img src={logo27} alt='logo parceiro'/>
          <img src={logo28} alt='logo parceiro'/>
        </SwiperSlide>
      </Swiper>
    </Div>
  );
}
