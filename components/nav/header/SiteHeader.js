import styles from './siteheader.module.scss'
import HeaderLinks from './HeaderLinks';

export default function SiteHeader() {

  return (
    <header className={styles.header} >
      <HeaderLinks />

    </header>
  )
}