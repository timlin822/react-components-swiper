import {Navigation,Pagination,Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

import SLIDERS_DATA from 'data/SlidersData.js';

import './Slider.css';

const Slider=()=>{
    return (
        <Swiper
            modules={[Navigation,Pagination,Autoplay]}
            loop
            autoplay={{delay: 3000,disableOnInteraction: false}}
            speed={1000}
            pagination={{clickable: true}}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next"
            }}
        >
            {SLIDERS_DATA.map(slider=>(
                <SwiperSlide key={slider.id}>
                    <img src={slider.url} alt="slider-image" />
                    <div className="slider-content">
                        <h2 className="slider-content-title">{slider.title} <span className="slider-content-keyTitle">{slider.keyTitle}</span></h2>
                        <p className="slider-content-subtitle">{slider.subTitle}</p>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"><FaChevronLeft /></div>
			<div className="swiper-button-next"><FaChevronRight /></div>
        </Swiper>
    );
}

export default Slider;