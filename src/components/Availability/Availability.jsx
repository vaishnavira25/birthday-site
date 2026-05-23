import React from "react";
import "./availability.css";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// IMAGES
import jaipurImg from "../../assets/availability/jaipur.webp";
import delhiImg from "../../assets/availability/delhi.webp";
import noidaImg from "../../assets/availability/noida.webp";
import gurgaonImg from "../../assets/availability/gurgaon.webp";
import faridabadImg from "../../assets/availability/faridabad.webp";
import greaterNoidaImg from "../../assets/availability/greater-noida.webp";
import agraImg from "../../assets/availability/agra.webp";

const cities = [
  {
    name: "Jaipur",
    image: jaipurImg,
  },
  {
    name: "Delhi",
    image: delhiImg,
  },
  {
    name: "Noida",
    image: noidaImg,
  },
  {
    name: "Gurgaon",
    image: gurgaonImg,
  },
  {
    name: "Faridabad",
    image: faridabadImg,
  },
  {
    name: "Greater Noida",
    image: greaterNoidaImg,
  },
  {
    name: "Agra",
    image: agraImg,
  },
];

const Availability = () => {
  return (
    <section className="availability-section default-padding">
      <div className="availability-container">
        <h2 className="availability-title">
          Serving Smiles Across Delhi NCR & Beyond
        </h2>

      <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={5}
  loop={true}
  speed={3000}
  allowTouchMove={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }}
>
  {cities.map((city, index) => (
    <SwiperSlide key={index}>
      <div className="city-card">
        <div className="city-image">
          <img src={city.image} alt={city.name} />
        </div>

        <div className="city-name">{city.name}</div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
};

export default Availability;