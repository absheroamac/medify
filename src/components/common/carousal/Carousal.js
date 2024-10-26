import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import { Box, Container } from '@mui/material';
import './Carousal.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export const Carousal = ({items,smNoItems=1,mdNoItems=3,spaceBetween=30}) => {
  return (
    <Box py={6} px={4}>
    
      <Swiper autoplay={{delay:3000,disableOnInteraction:false}} pagination={{clickable:true}} modules={[Pagination, Autoplay]}  slidesPerView={smNoItems}  spaceBetween={spaceBetween} breakpoints={{767:{slidesPerView:mdNoItems}}} style={{ paddingBottom: '40px' }}>
        {items.map((item,index)=><SwiperSlide key={index}>{item}</SwiperSlide>)}
      </Swiper>
      </Box>
  );

};
