import { AiFillCode, AiFillSmile } from "react-icons/ai";
import RevealWrap from "@/components/utils/RevealWrap";
import styles from "./mystats.module.scss";

const workTechLabels = [
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Redux', 'NodeJS',
  'Python', 'Flask', 'SQLAlchemy', 'Alembic', 'ActiveCampaign',
  'GitHub', 'Heroku', 'AWS', 'PostMan'
]

const funTechLabels = [
  'Next.js', 'ChatGPT', 'FastAPI', 'React-query', 'MongoDB', 'SupaBase',
  'Tailwind', 'Framer-motion', 'AnimeJS', 'Three.js', 'Render', 'Vercel'
]

export default function MyStats() {
  return (
    <div className={styles.stats}>
      <RevealWrap>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Useing at work</span>
          </h4>
          <div className={styles.statGrid}>
            {workTechLabels.map(label => (
              <span key={label} className='chip'>{label}</span>
            ))}
          </div>
        </div>
      </RevealWrap>
      <RevealWrap>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Learning for fun</span>
          </h4>
          <div className={styles.statGrid}>
            {funTechLabels.map(label => (
              <span key={label} className='chip'>{label}</span>
            ))}
          </div>
        </div>
      </RevealWrap>
    </div>
  );
};
