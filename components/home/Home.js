import React from 'react';
import styles from './home.module.scss'
import SideBar from '../nav/sidebar/SideBar';
import SiteHeader from '../nav/header/SiteHeader';
import HeroSection from './hero/HeroSection';
import RevealWrap from '../utils/RevealWrap';
export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <SiteHeader />
          <HeroSection />
          <RevealWrap>
            <div> THIS IS SOME LOREM TEXT </div>
          </RevealWrap>
        </main>
      </div>
    </>
  )
}