import RevealWrap from "@/components/utils/RevealWrap";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "./contactsection.module.scss";

export default function ContactSection() {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <RevealWrap width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </RevealWrap>
        <RevealWrap width="100%">
          <div>
            Here are my links if you want to connect.
          </div>
          <div>
            I'd love to hear from you!
          </div>
          <Link href="mailto:drewthurmcodes@gmail.com" target="_blank">
            <span className={styles.contactEmail}>drewthurmcodes@gmail.com</span>
          </Link>
          <div className={styles.contactIcons}>
            <Link href="mailto:drewthurmcodes@gmail.com" target="_blank">
              <AiFillMail size="2.4rem" />
            </Link>
            <Link href="https://www.github.com/drewthurm21" target="_blank">
              <AiFillGithub size="2.4rem" />
            </Link>
            <Link href="https://www.linkedin.com/in/drew-thurman/" target="_blank">
              <AiFillLinkedin size="2.4rem" />
            </Link>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
};
