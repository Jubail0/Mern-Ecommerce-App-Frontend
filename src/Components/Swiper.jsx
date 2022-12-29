import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
function ImageSlider({products}) {
  return (

         <Swiper
        slidesPerView={4}
        spaceBetween={25}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
       {products?.map((items,index)=> 
        <SwiperSlide key={index}><Card  swiper={true} img={items.img.imgeUrl} id={items._id} btn="View More" btn1 ="Add to cart" width={300}height={420}radius ={8}/></SwiperSlide>
        )}
    
      </Swiper>
    
  )
}

export default ImageSlider