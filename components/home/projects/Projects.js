import SectionHeader from "../../utils/SectionHeader";
import Project from './Project'
import styles from './projects.module.scss'

export default function ProjectSection() {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Jake Hembree Design",
    imgSrc: "../../../jakeHembreeHero.png",
    code: "https://github.com/Drewthurm21/jakeprofile",
    projectLink: "https://www.jakehembree.com",
    tech: ["Next.js", "React", "Tailwind", "Framer-Motion", "Resend", "Vercel"],
    description: "Are you looking for a portfolio website for your small business or company?  I can do that!",
    modalContent: (
      <>
        <p>
          One of my favorite projects so far! This is a beautiful portfolio website with a simple built-in CMS for my friend, and insanely talented graphic designer, Jake Hembree.
        </p>
        <p>
          Since this is a simple SPA with minimal interactivity, I decided to build this in Next.js / React using Tailwind and framer-motion for the styles. The email functionality and templating are handled by Resend, and
          the site is deployed on Render.
        </p>
        <p>
          He wanted a simple, clean, easy to update site to showcase his work, and I think we nailed it! Check it out via the link below.
        </p>
      </>
    ),
  },
  {
    title: "LittleJohn",
    imgSrc: "../../../littleJohnHero.PNG",
    code: "https://github.com/Drewthurm21/littleJohn",
    projectLink: "",
    tech: ["Node.js", "React", "Redux", "Python", "Flask", "SQLAlchemy", "APIs", "Socket.io"],
    description: "Have you ever wondered how it would feel to trade millions from the comfort of your own couch?  You might wanna try this app I made.",
    modalContent: (
      <>
        <p>
          A pared-down clone of the popular stock trading website RobinHood.com, LittleJohn
          (see what I did there?) is a WIP stock trading sandbox.
        </p>
        <p>
          The tech stack is Python & Flask with SQLAlchemy on the backend. The frontend is built in React, and uses Redux state management.
          This app leverages the FinnHub and AlphaVantage APIs for all company info and stock history, as well as market news, and Socket.io (websockets) for real-time stock charts.
          <p>It is deployed on Render.</p>
        </p>
        <p>
          This is a WIP project, with the following features implemented:
          <p>Users & authentication</p>
          <p>Stock lookup & history</p>
          <p>Real-time stock charts</p>
          <p>Stock Trades</p>
          <p>Watchlists</p>
        </p>
        <p>
          And the following features to come!
          <p>* Multiple Portfolios - test multiple trading strategies separately</p>
          <p>Add / edit payment methods - safely store payment methods for cash deposits</p>
          <p>Stock history controls - select from multiple data sets, and graph styles</p>
          <p>ChatGPT integrations - a chat bot for users to ask stock or market questions</p>
        </p>
      </>
    ),
  },
];
