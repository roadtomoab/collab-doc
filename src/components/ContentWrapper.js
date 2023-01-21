import styles from "./ContentWrapper.module.css";

function ContentWrapper() {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}

export default ContentWrapper;