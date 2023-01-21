import styles from "./DocumentCard.module.css";

function DocumentCard ({ text, onClick, deleteHandler }) {
  const createTitle = (text) => {
    // removes HTML tags - only continues if text is not blank
    if (text.replace(/<\/?[^>]+(>|$)/g, "")) {
      let parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const title = doc.body.childNodes[0].lastChild.innerHTML || doc.body.childNodes[0].innerHTML;
      if (title.length > 10) return `${title.slice(0, 10)}...`
      else return title;
    }
    return "Untitled Doc";
  };
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div
        className={styles.preview}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <div className={styles.footer}>
        <div className={styles.title}>{createTitle(text)}</div>
        <div className={styles.delete} onClick={deleteHandler}>
          <span role="img" aria-label="bin">
            ❌
          </span>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;