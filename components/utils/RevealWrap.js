import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from './revealwrap.module.scss'

export default function RevealWrap({ children }) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
      return
    }

    slideControls.start("hidden");
    mainControls.start("hidden");
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={styles.revealWrap}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 5,
          bottom: 0,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      />
    </div>
  );
}

