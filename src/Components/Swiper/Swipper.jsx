import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

function Swipper() {
  return (
    <>
      <Swiper
        style={{ marginTop: "2rem" }}
        slidesPerView={4}
        spaceBetween={25}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ position: "relative", textAlign: "center" }}>
          <img
            src={img1}
            alt=""
            style={{ width: "20rem", borderRadius: "9px" }}
          />
          <h1
            style={{
              position: "absolute",
              textAlign: "center",
              color: "white",
              top: "85%",
              left: "20%",
            }}
          ></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt=""
            style={{ width: "20rem", height: "25rem", borderRadius: "9px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            style={{ width: "20rem", borderRadius: "9px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            style={{ width: "20rem", borderRadius: "9px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            style={{ width: "20rem", borderRadius: "9px" }}
          />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}

export default Swipper;
