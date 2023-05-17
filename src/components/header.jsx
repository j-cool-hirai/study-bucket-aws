import React from "react";
import topMv01 from "../assets/image/header/topMv01.jpg";
import Logo from "../assets/image/header/yo-roppaken_logo.svg";
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
      <div className="p-header">
        <div className="p-header-text">元祖ソースカツ丼</div>
        <div className="p-header-logo">
          <img src={Logo} alt="ヨーロッパ軒"></img>
        </div>
        <header className="p-header-nav">
          <ul className="p-header-nav__cont">
            <li className="p-header-nav__cont-item">
              <a href="#" className="p-header-nav__cont-item-link">
                新着情報
              </a>
            </li>
            <li className="p-header-nav__cont-item">
              <a href="#" className="p-header-nav__cont-item-link">
                営業日＆マップ
              </a>
            </li>
            <li className="p-header-nav__cont-item">
              <a href="#" className="p-header-nav__cont-item-link">
                小史
              </a>
            </li>
          </ul>
        </header>
        <div className="p-header-mv">
          <div className="p-header-mv__bg"></div>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            speed={2000}
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
