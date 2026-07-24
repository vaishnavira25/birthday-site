import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCreative,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600",
    title: "Make Every Birthday Magical",
  },

  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1600",
    title: "Luxury Birthday Celebrations",
  },

  {
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600",
    title: "Memories That Last Forever",
  },
];

export default function Hero() {
  return (
    <section className="hero-section">

      <Swiper
        modules={[Autoplay, EffectCreative, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },

          next: {
            translate: ["100%", 0, 0],
          },
        }}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}

        pagination={{ clickable: true }}

        loop={true}

        className="hero-swiper"
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="overlay"></div>

              <div className="hero-content">

                <h1>{slide.title}</h1>

                <p>
                  Premium birthday planning services
                  for unforgettable celebrations.
                </p>

                <div className="hero-buttons">
                  <button>Book Now</button>

                  <button className="secondary-btn">
                    Explore Services
                  </button>
                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}