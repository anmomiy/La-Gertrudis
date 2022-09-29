import GaleryItem from "../GaleryItem/GaleryItem";
import galeryImage from "../../Utils/imageMock";
import Breakpoint from "../Breakpoints/Breakpoints";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Gallery.css'


const Galery = () =>{

    return(
        <>
        <Breakpoint at="xs">
        <div className="galeryContainer" >
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    }}
            
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
            >
                {galeryImage.map(e=>{
                        return(
                            
                            <SwiperSlide key={e.id}>
                                
                                <GaleryItem image={e} />
                            </SwiperSlide>
                        )
                    })
                    }
            </Swiper>
        </div>
        </Breakpoint>
        <Breakpoint at="sm">
        <div className="galeryContainer">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
              
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
            >
                {galeryImage.map(e=>{
                        return(
                            <SwiperSlide key={e.id}><GaleryItem image={e} /></SwiperSlide>
                        )
                    })
                    }
            </Swiper>
            
        </div>
        </Breakpoint>
        <Breakpoint at="md">
        <div className="galeryContainer">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
            >
                {galeryImage.map(e=>{
                        return(
                            <SwiperSlide key={e.id}><GaleryItem image={e} /></SwiperSlide>
                        )
                    })
                    }
            </Swiper>
            
        </div>
        </Breakpoint>

        <Breakpoint at="lg">
            <div className="galeryContainer">
                {galeryImage.map(e=>{
                    return(
                        <GaleryItem image={e} key={e.id}/>
                    )
                })
                }
            </div>
        </Breakpoint>
        </>

    )
}

export default Galery;