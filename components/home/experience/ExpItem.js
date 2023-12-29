import RevealWrap from "../../utils/RevealWrap";
import styles from "./expsection.module.scss";

export default function ExpItem({
  title, position, time, location, description, tech,
}) {
  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <RevealWrap>
          <span className={styles.title}>{title}</span>
        </RevealWrap>
        <RevealWrap>
          <span>{time}</span>
        </RevealWrap>
      </div>

      <div className={styles.header}>
        <RevealWrap>
          <span className={styles.position}>{position}</span>
        </RevealWrap>
        <RevealWrap>
          <span>{location}</span>
        </RevealWrap>
      </div>
      <RevealWrap>
        <p className={styles.description}>{description}</p>
      </RevealWrap>
      <RevealWrap>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </RevealWrap>
    </div>
  );
};