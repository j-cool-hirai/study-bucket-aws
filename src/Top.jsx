import React from "react";
import topMv01 from "./assets/image/topMv01.jpg";
import "./assets/scss/Top.scss";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function App() {
  return (
    <>
      <div className="top">
        <div className="top-mv">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect={"fade"}
            speed={1000}
            fadeEffect={{
              crossFade: true,
            }}
            containerClass="swiper-container"
            onSwiper={(swiper) => {
              swiper.update();
            }}
          >
            <SwiperSlide>
              <img src={topMv01} alt="ソースカツ丼1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={topMv01} alt="ソースカツ丼2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={topMv01} alt="ソースカツ丼3" />
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="top-section">確認</section>
      </div>
    </>
  );
}

export default App;
