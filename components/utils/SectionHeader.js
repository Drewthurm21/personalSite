import styles from "./sectionheader.module.scss";
import RevealWrap from "./RevealWrap";

export default function SectionHeader({ title, dir = "r" }) {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <RevealWrap>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </RevealWrap>
      </h3>
    </div>
  );
};
