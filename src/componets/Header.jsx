import styles from "./Header.module.scss";

import Logo from "../assets/logo_transparent.png";

import icon from "../assets/icon";

import { ButtonOfHeader } from "./ui/ButtonOfHeader";

import { useState, useRef, useEffect } from "react";

export function Header(props) {
   const menuRef = useRef();

   const [move, setMove] = useState(false);
   const [chenge, setChenge] = useState(false);

   useEffect(() => {
      if (window.screen.availWidth <= 505) {
         if (move) {
            menuRef.current.style.display = "block";
            setTimeout(() => {
               menuRef.current.style.right = "0";
            }, 100)
         } else if (!move) {
            menuRef.current.style.right = "-220px";
            setTimeout(() => {
               menuRef.current.style.display = "none";
            }, 1100)
         } else {
            return;
         }
      } else {
         return;
      }
   }, [move]);

   const onSend = (number) => {
      setChenge(!chenge);
      props.Switch([number, chenge])
   }

   return (
      <div className={styles.header}>
         <img src={Logo} alt="Logo" className={styles.header__logo}
            onClick={() => onSend(0)}
         />
         <ul className={`${styles.header__menu} ${styles.menu}`} ref={menuRef}>
            <li className={styles.menu__item}
               onClick={() => onSend(0)}><ButtonOfHeader>Introduction</ButtonOfHeader></li>
            <li className={styles.menu__item}
               onClick={() => onSend(1)}><ButtonOfHeader>Education</ButtonOfHeader></li>
            <li className={styles.menu__item}
               onClick={() => onSend(2)}><ButtonOfHeader>Work experience</ButtonOfHeader></li>
            <li className={styles.menu__item}
               onClick={() => onSend(3)}><ButtonOfHeader>Contacts</ButtonOfHeader></li>
         </ul>
         <i className={`${styles.header__plusMenu} ${move ? styles.header__rotateIn : styles.header__rotateOut}`}
            onClick={() => { setMove(!move) }}
         >
            {icon.plus}
         </i>
      </div >
   );
}
