import styles from "./BlockLinkCopy.module.scss";

export function BlockLinkCopy(props) {

   return (
      <div className={` ${styles.dialog} ${props.change ? styles.show : ""}`}
      >The link has been successfully copied!</div>
   );
}