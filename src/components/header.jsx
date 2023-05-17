import React from "react";
import topMv01 from "../assets/image/header/topMv01.jpg";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function Header() {
  return (
    <>
      <div className="header">
        <header className="header-nav">
            <ul>
                <li><a href="#">新着情報</a></li>
                <li><a href="#">営業日＆マップ</a></li>
                <li><a href="#">小史</a></li>
            </ul>
        </header>
        <div className="header-mv">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            speed={2000}
            containerClass="swiper-container"
            fadeEffect={{ crossFade: true }}
            simulateTouch={false}
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
      </div>
    </>
  );
}

export default Header;
