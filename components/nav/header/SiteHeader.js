import styles from './siteheader.module.scss'
import HeaderLinks from './HeaderLinks';
import OutlinedButton from '@/components/buttons/OutlinedButton';

export default function SiteHeader() {

  return (
    <header className={styles.header} >
      <div>
        <p>drewthurmcodes@gmail.com</p>
        <HeaderLinks />
      </div>
      <OutlinedButton onClick={() => window.open("/myResume.pdf")}>My Resume</OutlinedButton>
    </header>
  )
}