import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

const linkOptions = { initial: { x: -70 }, animate: { x: 0 } }
const myLinksLabels = ['about', 'projects', 'experience', 'contact']

export default function SideBar() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const options = { threshold: 0.3 };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      {...linkOptions}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <span className={styles.logo}>
        d <span>t</span>
      </span>
      {myLinksLabels.map((label, i) => (
        <motion.a {...linkOptions} href={`#${label}`}
          key={`${label}-key`}
          onClick={() => setSelected(label)}
          transition={{ duration: 0.5, delay: (i / 10) }}
          className={selected === label ? styles.selected : ""}
        >
          {label[0].toLocaleUpperCase() + label.slice(1)}
        </motion.a>
      ))
      }
    </motion.nav >
  );
};
