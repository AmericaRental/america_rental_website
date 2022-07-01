import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from '../images/hidraulicos/banner.svg';

function Hidraulicos() {
  return (
    <>
      <Header />
      <main>
      <Swiper
          spaceBetween={0}
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
          className='banner'
        >
          <SwiperSlide className="bannerSwipe">
            <img src={banner} alt="logo parceiro" className="bannerImage"/>
          </SwiperSlide>
         
        </Swiper>
      </main>
      <Footer />
    </>
  );
}

export default Hidraulicos;
