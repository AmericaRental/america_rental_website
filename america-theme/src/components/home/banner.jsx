import React from "react";
import banner1 from '../../images/home_images/banner1.svg';

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/style.css";

export default class Banner extends React.Component {
  render() {
    return (
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
            <img src={banner1} alt="logo parceiro" className="bannerImage"/>
          </SwiperSlide>
         
        </Swiper>
    );
  }
}
