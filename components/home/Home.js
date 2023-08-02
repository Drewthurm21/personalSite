import React from 'react';
import styles from './home.module.scss'
import SideBar from '../nav/sidebar/SideBar';
import SiteHeader from '../nav/header/SiteHeader';
import HeroSection from './hero/HeroSection';

export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <SiteHeader />
          <HeroSection />
        </main>
      </div>
    </>
  )
}