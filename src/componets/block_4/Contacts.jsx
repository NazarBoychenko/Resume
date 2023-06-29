import styles from "./Contacts.module.scss";

import icon from "../../assets/icon";

import { useState } from "react";
import { createPortal } from "react-dom";

import { BlockLinkCopy } from "../ui/BlockLinkCopy";

export function Contacts() {
   const [show, setShow] = useState(false);

   const onCopy = (links) => {
      navigator.clipboard.writeText(links)
      setShow(true);
      setTimeout(() => {
         setShow(false);
      }, 5000);
   }

   return (
      <div className={`${styles.contacts} ${styles.mainBlock}`}>
         {createPortal(
            <BlockLinkCopy change={show} />,
            document.querySelector("body")
         )}
         <div className={`${styles.contacts__block} ${styles.block}`}
            style={{ backgroundColor: "rgb(181, 181, 181, 0.5)" }}
            onClick={() => { onCopy("https://github.com/NazarBoychenko") }}
         >
            <i className={styles.icon}>{icon.gitHub}</i>
            <span className={styles.text}>GitHub</span>
         </div>
         <div className={`${styles.contacts__block} ${styles.block}`}
            style={{ backgroundColor: "rgb(6, 2, 150, 0.5)" }}
            onClick={() => { onCopy("www.linkedin.com/in/nazar-bouchenko-49047825b") }}
         >
            <i className={styles.icon}>{icon.linkedIn}</i>
            <span className={styles.text}>LinkedIn</span>
         </div>
         <div className={`${styles.contacts__block} ${styles.block}`}
            style={{ backgroundColor: "rgb(5, 99, 250, 0.5)" }}
            onClick={() => { onCopy("@Nazar4uc") }}
         >
            <i className={styles.icon}>{icon.telegram}</i>
            <span className={styles.text}>Telegram</span>
         </div>
         <div className={`${styles.contacts__block} ${styles.block}`}
            style={{ backgroundColor: "rgb(6, 186, 0, 0.5)" }}
            onClick={() => { onCopy("+380622849068") }}
         >
            <i className={styles.icon}>{icon.telephone}</i>
            <span className={styles.text}>Telephone</span>
         </div>
         <div className={`${styles.contacts__block} ${styles.block}`}
            style={{ backgroundColor: "rgb(186, 93, 0, 0.5)" }}
            onClick={() => { onCopy("bojcenkonazar9@gmail.com") }}
         >
            <i className={styles.icon}>{icon.email}</i>
            <span className={styles.text}>Email</span>
         </div>
      </div>
   );
}