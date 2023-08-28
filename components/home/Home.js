import React from 'react';
import styles from './home.module.scss'
import SideBar from '../nav/sidebar/SideBar';
import ContactSection from './contact/ContactSection';
import SiteHeader from '../nav/header/SiteHeader';
import ExpSection from './experience/ExpSection';
import ProjectSection from './projects/Projects';
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
          <ExpSection />
          <ProjectSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}