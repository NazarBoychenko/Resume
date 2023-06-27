import styles from "./Header.module.scss";

import Logo from "../assets/logo_transparent.png";

import icon from "../assets/icon";

import { ButtonOfHeader } from "./ui/ButtonOfHeader";

import { useState } from "react";

export function Header(props) {
   const [move, setMove] = useState(false);
   const [chenge, setChenge] = useState(false);

   const onSend = (number) => {
      setChenge(!chenge);
      props.Switch([number, chenge])
   }

   return (
      <div className={styles.header}>
         <img src={Logo} alt="Logo" className={styles.header__logo}
            onClick={() => onSend(0)}
         />
         <ul className={`${styles.header__menu} ${styles.menu} ${move ? styles.header__closeMenu : styles.header__showMenu}`}>
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
