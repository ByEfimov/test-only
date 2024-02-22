import React, { useEffect } from "react";
import { Data } from ".";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const SliderNews = ({
  data,
  activePoint,
}: {
  data: Data[];
  activePoint: number;
}) => {
  const currentNews = data[activePoint - 1].news;

  useEffect(() => {
    gsap
      .timeline({ repeat: 0 })
      .to(".sliderNews", { opacity: 0, duration: 0.3 })
      .to(".sliderNews", { opacity: 1, duration: 0.3 });
  }, [activePoint]);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={window.innerWidth > 500 ? 3 : 1}
        className="sliderNews"
        spaceBetween={window.innerWidth > 500 ? 90 : 50}
        navigation
      >
        {currentNews.map((news, i) => (
          <SwiperSlide className="news" key={i}>
            <div className="year">{news.year}</div>
            <div className="description">{news.description}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderNews;
