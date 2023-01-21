import styles from "./Header.module.css";

function Header ({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} onClick={onClick}>
        Docs
      </p>
    </div>
  );
}

export default Header;