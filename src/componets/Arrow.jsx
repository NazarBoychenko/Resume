import styles from "./Arrow.module.scss";

import { useRef, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Introduction } from "./block_1/Introduction";
import { Education } from './block_2/Education';
import { Achievements } from './block_3/Achievements';
import { Contacts } from './block_4/Contacts';

export function Arrow(props) {

   const sliderRef = useRef(null);

   useEffect(() => {
      sliderRef.current.slickGoTo(props.Switch[0]);
   }, [props.Switch[1]]);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      swipe: true,
      adaptiveHeight: true,
   };

   return (
      <div className={styles.arrow}>
         <Slider ref={sliderRef} {...settings}>
            <Introduction />
            <Education />
            <Achievements />
            <Contacts />
         </Slider>
      </div>
   );
}