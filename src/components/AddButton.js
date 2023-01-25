import styles from "./AddButton.module.css";

function AddButton({ onClick }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p className={styles.sign}>+</p>
    </div>
  );
}

export default AddButton;