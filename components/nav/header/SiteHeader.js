import styles from './siteheader.module.scss'
import HeaderLinks from './HeaderLinks';
import OutlinedButton from '@/components/buttons/OutlinedButton';

export default function SiteHeader() {

  return (
    <header className={styles.header} >
      <HeaderLinks />
      <OutlinedButton onClick={() => window.open("/myResume.pdf")}>My Resume</OutlinedButton>
    </header>
  )
}