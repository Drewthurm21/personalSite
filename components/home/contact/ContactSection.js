import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import RevealWrap from "@/components/utils/RevealWrap";
import ContactForm from "./ContactForm";
import styles from "./contactsection.module.scss";
import SectionHeader from "@/components/utils/SectionHeader";

export default function ContactSection() {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact" dir='r' />
      <div className={styles.contactWrapper}>
        <RevealWrap width="100%">
          <div>
            Here are my links if you'd like to connect.
          </div>
          <Link href="mailto:drewthurmcodes@gmail.com" target="_blank">
            <span className={styles.contactEmail}>drewthurmcodes@gmail.com</span>
          </Link>
          <div className={styles.contactIcons}>
            <Link href="https://www.github.com/drewthurm21" target="_blank">
              <AiFillGithub size="2.4rem" />
            </Link>
            <Link href="https://www.linkedin.com/in/drew-thurman/" target="_blank">
              <AiFillLinkedin size="2.4rem" />
            </Link>
          </div>
          <div style={{ color: '#0aff9d' }}>Or use the terminal below to email me!</div>
        </RevealWrap>
      </div>
      <ContactForm />
    </section>
  );
};
