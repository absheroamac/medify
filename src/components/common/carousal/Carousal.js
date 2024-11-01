import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Container } from "@mui/material";
import "./Carousal.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Carousal = ({
  items,
  smNoItems = 1,
  lgNoItems,
  mdNoItems = 3,
  spaceBetween = 30,
}) => {
  return (
    <Box
      py={6}
      sx={{
        px: {
          xs: 1,
          sm: 2,
          md: 4,
        },
      }}
      maxWidth={"100%"}
    >
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={spaceBetween}
        breakpoints={{
          767: { slidesPerView: mdNoItems },
          992: { slidesPerView: lgNoItems },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
