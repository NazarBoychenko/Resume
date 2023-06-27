import styles from "./Achievements.module.scss";

export function Achievements() {
   return (
      <div className={`${styles.achievements} ${styles.mainBlock}`}>
         <span className={styles.achievements__text}>
            I have no experience in this field, but I have a desire to learn and
            become a front-end developer. I have practiced a lot and I can assure
            you that you will be pleasantly surprised by my work. If I need to learn
            something new, I will gladly do it.
         </span>
      </div>
   );
}