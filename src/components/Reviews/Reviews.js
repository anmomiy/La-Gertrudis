import './Reviews.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { Button } from '@mui/material';
import { Pagination, Navigation } from "swiper";
import Breakpoint from "../Breakpoints/Breakpoints";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
const Reviews = () =>{
    return(
        <>
        <Breakpoint at="xs">
        <div className="reviewContainer">
            
            <h3>Lo que nuestros huéspedes dicen de nosotros</h3>
            <div className="reviewList">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ReviewItem image="rvimg1.png" name="Victoria Russian" date="Hace 7 meses" comment="Claudia y Daniel, los dueños, son divinos, siempre con muy buena predisposición y personas de gran calidez. Comida casera hecha por el hijo Ramiro que es chef, un 10/10. Gracias por su hospitalidad y la experiencia de un fin de semana en una casa del 1900. Esteban, Andrea y Victoria."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg2.png" name="Francisca Ottani" date="Hace 11 meses" comment="Casa maravillosa con una inmejorable atención de sus dueños. El lugar en el que está ubicada la casa es lo más, para conocer las bodegas de la zona, y las vistas a la cordillera un sueño."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg3.png" name="Gustavo Cordova" date="Hace 4 meses" comment="Hermoso lugar, muy bien atendido, excelente para relajarse y disfrutar en familia"/></SwiperSlide>
                </Swiper>
            </div>
            <div className="reviewButtons">
                <Button variant="text" className="rvBtnText">Ver Más</Button>
                <Button variant="contained" className="rvBtnCont">Escribe un comentario</Button>
            </div>
        </div>
        </Breakpoint>
        <Breakpoint at="sm">
        <div className="reviewContainer">
            
            <h3>Lo que nuestros huéspedes dicen de nosotros</h3>
            <div className="reviewList">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ReviewItem image="rvimg1.png" name="Victoria Russian" date="Hace 7 meses" comment="Claudia y Daniel, los dueños, son divinos, siempre con muy buena predisposición y personas de gran calidez. Comida casera hecha por el hijo Ramiro que es chef, un 10/10. Gracias por su hospitalidad y la experiencia de un fin de semana en una casa del 1900. Esteban, Andrea y Victoria."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg2.png" name="Francisca Ottani" date="Hace 11 meses" comment="Casa maravillosa con una inmejorable atención de sus dueños. El lugar en el que está ubicada la casa es lo más, para conocer las bodegas de la zona, y las vistas a la cordillera un sueño."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg3.png" name="Gustavo Cordova" date="Hace 4 meses" comment="Hermoso lugar, muy bien atendido, excelente para relajarse y disfrutar en familia"/></SwiperSlide>
                </Swiper>
            </div>
            <div className="reviewButtons">
                <Button variant="text" className="rvBtnText">Ver Más</Button>
                <Button variant="contained" className="rvBtnCont">Escribe un comentario</Button>
            </div>
        </div>
        </Breakpoint>
        <Breakpoint at="md">
        <div className="reviewContainer">
            
            <h3>Lo que nuestros huéspedes dicen de nosotros</h3>
            <div className="reviewList">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={5}
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><ReviewItem image="rvimg1.png" name="Victoria Russian" date="Hace 7 meses" comment="Claudia y Daniel, los dueños, son divinos, siempre con muy buena predisposición y personas de gran calidez. Comida casera hecha por el hijo Ramiro que es chef, un 10/10. Gracias por su hospitalidad y la experiencia de un fin de semana en una casa del 1900. Esteban, Andrea y Victoria."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg2.png" name="Francisca Ottani" date="Hace 11 meses" comment="Casa maravillosa con una inmejorable atención de sus dueños. El lugar en el que está ubicada la casa es lo más, para conocer las bodegas de la zona, y las vistas a la cordillera un sueño."/></SwiperSlide>
                    <SwiperSlide><ReviewItem image="rvimg3.png" name="Gustavo Cordova" date="Hace 4 meses" comment="Hermoso lugar, muy bien atendido, excelente para relajarse y disfrutar en familia"/></SwiperSlide>
                </Swiper>
            </div>
            <div className="reviewButtons">
                <Button variant="text" className="rvBtnText">Ver Más</Button>
                <Button variant="contained" className="rvBtnCont">Escribe un comentario</Button>
            </div>
        </div>
        </Breakpoint>
        <Breakpoint at="lg">
        <div className="reviewContainer">
            
            <h3>Lo que nuestros huéspedes dicen de nosotros</h3>
            <div className="reviewList">
                    <ReviewItem image="rvimg1.png" name="Victoria Russian" date="Hace 7 meses" comment="Claudia y Daniel, los dueños, son divinos, siempre con muy buena predisposición y personas de gran calidez. Comida casera hecha por el hijo Ramiro que es chef, un 10/10. Gracias por su hospitalidad y la experiencia de un fin de semana en una casa del 1900. Esteban, Andrea y Victoria."/>
                    <ReviewItem image="rvimg2.png" name="Francisca Ottani" date="Hace 11 meses" comment="Casa maravillosa con una inmejorable atención de sus dueños. El lugar en el que está ubicada la casa es lo más, para conocer las bodegas de la zona, y las vistas a la cordillera un sueño."/>
                    <ReviewItem image="rvimg3.png" name="Gustavo Cordova" date="Hace 4 meses" comment="Hermoso lugar, muy bien atendido, excelente para relajarse y disfrutar en familia"/>
            </div>
            <div className="reviewButtons">
                <Button variant="text" className="rvBtnText">Ver Más</Button>
                <Button variant="contained" className="rvBtnCont">Escribe un comentario</Button>
            </div>
        </div>
        </Breakpoint>
        </>
    )
}
export default Reviews;