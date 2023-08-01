import styles from './headerlinks.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';
import OutlinedButton from '@/components/buttons/OutlinedButton';

const linkOptions = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

const linkData = [
  {
    label: 'github',
    icon: <AiFillGithub size='3.4rem' />,
    href: 'https://github.com/Drewthurm21',
  },
  {
    label: 'linkedin',
    icon: <AiFillLinkedin size='3.4rem' />,
    href: 'https://www.linkedin.com/in/drew-thurman/',
  },
]

export default function HeaderLinks() {

  return (
    <div className={styles.headerWrap} >
      <div>
        {linkData.map((link, i) => {
          return (
            <motion.span key={link.href}
              {...linkOptions}
              transition={{ duration: .5, delay: i / 10 }}
              className={styles.headerLink}
            >
              <Link href={link.href} target="_blank" rel="nofollow">
                {link.icon}
              </Link>
            </motion.span>
          )
        })
        }
      </div>
      <OutlinedButton onClick={() => window.open("/myResume.pdf")} > My Resume </OutlinedButton>
    </div>
  )
}