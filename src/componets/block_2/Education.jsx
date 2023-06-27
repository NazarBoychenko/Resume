import styles from "./Education.module.scss";

import Nau from "../../assets/nau.png";
import VcNau from "../../assets/vcnau.jpg";

export function Education() {
   return (
      <div className={`${styles.education} ${styles.mainBlock}`}>
         <div className={`${styles.education__block} ${styles.block}`}>
            <ul className={`${styles.block__list} ${styles.list}`}>
               <li className={styles.list__item}>National Aviation University (NAU)</li>
               <li className={styles.list__item}><a href="https://nau.edu.ua/" target="_blank">https://nau.edu.ua/</a></li>
               <li className={styles.list__item}>My speciality: 125 Cybersecurity</li>
               <li className={styles.list__item}>Years of study: 2022-2025</li>
            </ul>
            <img src={Nau} alt="Gerb Nau" className={styles.block__gerb} />
         </div>
         <div className={`${styles.education__block} ${styles.block}`}>
            <ul className={`${styles.block__list} ${styles.list}`}>
               <li className={styles.list__item}>Vasylkiv Vocational College of the National Aviation University (VC NAU)</li>
               <li className={styles.list__item}><a href="https://vfk.nau.edu.ua//" target="_blank">https://vfk.nau.edu.ua//</a></li>
               <li className={styles.list__item}>My speciality: 121 Software engineering</li>
               <li className={styles.list__item}>Years of study: 2018-2022</li>
            </ul>
            <img src={VcNau} alt="Gerb Vc Nau" className={styles.block__gerb} />
         </div>
      </div>
   );
}