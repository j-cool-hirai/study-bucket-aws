import React from "react";
import topMv01 from "./assets/image/topMv01.jpg";
import "./assets/scss/Top.scss";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function App() {
  return (
    <>
      <div className="top">
        <div className="top-mv">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="fade" // effectの値を文字列で指定
            speed={2000}
            containerClass="swiper-container"
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <img src={topMv01} alt="ソースカツ丼1" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://cdn.snapdish.co/photo/596c546cda21f213d1cfbb19"}
                alt="ソースカツ丼2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={topMv01} alt="ソースカツ丼3" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://cdn.snapdish.co/photo/596c546cda21f213d1cfbb19"}
                alt="ソースカツ丼4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="top-section">確認</section>
      </div>
    </>
  );
}

export default App;
