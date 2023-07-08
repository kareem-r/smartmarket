import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slides from "../../Land.json"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Swiper/Land.css"
import "swiper/css/effect-coverflow"
import Image from "../Swiper/Ellipse 2.png"
import Image2 from "../Swiper/Ellipse 3.png"

const Land = () => {
  return (
  <div>
    <div className="container">
    <Swiper
    className='Swiper'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
        {slides.map((slide)=>(
             <SwiperSlide className='swiperSlide' key={slide.image}>
                <div>
                    <img src={Image} style={{zindex: "-1",position: "absolute",width: "345px",zIndex:"-1"}} alt="" />
                    <img src={Image2} style={{position: "absolute",width: "240px",zIndex:"-1"}} alt="" />
                
    
                <img src={slide.image} alt="" style={{width:"300px",height:"300px",borderRadius:"50%"}} />
                </div>
               
                <div className="text">
                <p style={{fontfamily:" sans-serif",fontsize: "larger",fontweight: "bold"}}>{slide.title}</p>
                <h2>{slide.subTitle}</h2>
                <p style={{fontfamily:" sans-serif",fontsize: "larger",fontweight: "bold"}}>{slide.supertitle}</p>

                </div>
               
             </SwiperSlide>
             

        ))}
 
     
     
    </Swiper>
    </div>
  </div>
  )
}

export default Land