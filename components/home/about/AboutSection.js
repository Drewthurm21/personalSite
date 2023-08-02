import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "@/components/utils/RevealWrap";
import SectionHeader from "@/components/utils/SectionHeader";
import MyLinks from "@/components/nav/header/HeaderLinks";
import MyStats from "./MyStats";
import styles from "./aboutsection.module.scss";

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Drew, if you haven&apos;t already gathered that by
              now. I&apos;m a business manager turned software engineer from Overland Park,
              Kansas. I specialize in the backend, primarily using Node.js and Python, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I work with lots of companies, building tools to help automate their workflows and quote new clients.
              I have worked for App Academy and edX as a Software Engineer Instructor, as well!
              I&apos;m a tinkerer & builder with an inquisitive mind. I have a passion
              for coding, problem solving, teaching and training.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to travel and go rock climbing. Any given Sunday
              you&apos;ll find me gaming with my son or coding away on a personal project. I
              also teach courses online, if you&apos;re looking to learn!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently looking for new opportunities where I can utilize my
              love of coding to help your business increase it&apos;s productivity and avoid extra costs. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <MyStats />
      </div>
    </section>
  );
};
