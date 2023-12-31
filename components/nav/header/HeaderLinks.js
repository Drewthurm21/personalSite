import styles from './headerlinks.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const linkOptions = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

const linkData = [
  {
    icon: <AiFillGithub size='2.4rem' />,
    href: 'https://github.com/Drewthurm21',
  },
  {
    icon: <AiFillLinkedin size='2.4rem' />,
    href: 'https://www.linkedin.com/in/drew-thurman/',
  },
]

export default function HeaderLinks() {

  return (
    <>
      <div className={styles.headerLinks} >
        {linkData.map((link, i) => {
          return (
            <motion.span key={link.href}
              {...linkOptions}
              transition={{ duration: .5, delay: i / 10 }}
            >
              <Link href={link.href} target="_blank" rel="nofollow">
                {link.icon}
              </Link>
            </motion.span>
          )
        })
        }
      </div>
    </>
  )
}