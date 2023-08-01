import React from 'react';
import styles from './home.module.scss'
import { SideBar } from '../nav/SideBar';

export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          main section
        </main>
      </div>
    </>
  )
}