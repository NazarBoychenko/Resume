import styles from "./Introduction.module.scss";

import Face from "../../assets/Face.jpg";

export function Introduction() {
   return (
      <div className={`${styles.introduction} ${styles.mainBlock}`}>
         <div className={`${styles.introduction__description} ${styles.description}`}>
            <div className={styles.description__profession}>Frontend developer</div>
            <div className={styles.description__skillsText}>Skills:</div>
            <ul className={`${styles.description__skills} ${styles.skills}`}>
               <li className={styles.skills__items}>HTML</li>
               <li className={styles.skills__items}>CSS</li>
               <li className={styles.skills__items}>JavaScript</li>
               <li className={styles.skills__items}>SASS/SCSS</li>
               <li className={styles.skills__items}>React</li>
               <li className={styles.skills__items}>Redux</li>
               <li className={styles.skills__items}>Figma</li>
            </ul>
            <ul className={`${styles.description__skills} ${styles.skills}`}>
               <li className={styles.skills__items}>English-B1</li>
               <li className={styles.skills__items}>Ukrainian-C1</li>
               <li className={styles.skills__items}>Russian-B2</li>
            </ul>
         </div>
         <div className={styles.introduction__photo}>
            <img src={Face} alt="Photo" className={styles.introduction__face} />
         </div>
      </div>
   );
}