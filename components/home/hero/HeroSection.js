import styles from './herosection.module.scss'

export default function HeroSection() {

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrap}>
        <h1 className={styles.title}>Hey! I&apos;m Drew<span>.</span></h1>
        <h2 className={styles.subTitle}>I&apos;m a <span>full-stack dev</span></h2>
        <p className={styles.aboutText}>
          I&apos;ve spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to code. <span>Let&apos;s connect!</span>
        </p>
      </div>
    </section>
  )
}