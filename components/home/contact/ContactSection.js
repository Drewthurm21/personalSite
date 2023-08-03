import RevealWrap from "@/components/utils/RevealWrap";
import { AiFillMail } from "react-icons/ai";
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
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/drew-thurman"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
          </p>
        </RevealWrap>
        <RevealWrap width="100%">
          <Link href="mailto:drewthurmcodes@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>drewthurmcodes@gmail.com</span>
            </div>
          </Link>
        </RevealWrap>
      </div>
    </section>
  );
};
