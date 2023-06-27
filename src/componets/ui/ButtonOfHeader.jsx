import styles from "./ButtonOfHeader.module.scss";


export function ButtonOfHeader(props) {
   return (
      <button className={styles.button}>{props.children}</button>
   );
}