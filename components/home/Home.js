import React from 'react';
import styles from './home.module.scss'
import SideBar from '../nav/sidebar/SideBar';
import ContactSection from './contact/ContactSection';
import SiteHeader from '../nav/header/SiteHeader';
import AboutSection from './about/AboutSection';
import HeroSection from './hero/HeroSection';

export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}