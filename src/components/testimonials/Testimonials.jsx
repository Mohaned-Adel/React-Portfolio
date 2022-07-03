import React, { useRef, useState } from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Avatar Name",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint provident earum quod, eos atque dignissimos quae fugit rerum impedit sunt aliquid, obcaecati repellat dolor quibusdam cum! Qui praesentium voluptatem provident.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Avatar Name",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint provident earum quod, eos atque dignissimos quae fugit rerum impedit sunt aliquid, obcaecati repellat dolor quibusdam cum! Qui praesentium voluptatem provident.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Avatar Name",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint provident earum quod, eos atque dignissimos quae fugit rerum impedit sunt aliquid, obcaecati repellat dolor quibusdam cum! Qui praesentium voluptatem provident.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Avatar Name",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint provident earum quod, eos atque dignissimos quae fugit rerum impedit sunt aliquid, obcaecati repellat dolor quibusdam cum! Qui praesentium voluptatem provident.",
  },
];

const Testimonials = () => {
  const testimonial = data.map((testim) => {
    return (
      <SwiperSlide key={testim.id} className="testimonial">
        <div className="client__avatar">
          <img src={testim.avatar} alt="avatar one" />
        </div>
        <h5 className="client__name">{testim.name}</h5>
        <small className="client__review">{testim.review}</small>
      </SwiperSlide>
    );
  });
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonial}
      </Swiper>
    </section>
  );
};

export default Testimonials;
