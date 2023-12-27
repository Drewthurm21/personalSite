import RevealWrap from "@/components/utils/RevealWrap";
import ContactForm from "@/components/home/contact/ContactForm";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "./contactsection.module.scss";
import SectionHeader from "@/components/utils/SectionHeader";

export default function ContactSection() {
  return (
    <section className="section-wrapper" id="contact">
      <SectionHeader title="Contact" dir="r" />
      <ContactForm />
    </section>
  );
};
