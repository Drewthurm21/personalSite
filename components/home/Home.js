import React from 'react';
import styles from './home.module.scss'


export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <div>
          sidebar
        </div>
        <main>
          main section
        </main>
      </div>
    </>
  )
}