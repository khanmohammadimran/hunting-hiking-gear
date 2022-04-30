import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Banner.css";

import { EffectCoverflow, Pagination } from "swiper";

import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import banner5 from '../../../images/banner5.jpg'
import banner6 from '../../../images/banner6.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;