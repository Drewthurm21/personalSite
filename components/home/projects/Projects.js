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
    description: "Are you in need of an online portfolio, or a website for your small business?  I can do that!",
    modalContent: (
      <>
        <p>
          One of my favorite projects so far! This is a beautiful portfolio website with a simple built-in CMS for my friend, and insanely talented graphic designer, Jake Hembree.
        </p>
        <p>
          It&apos;s built in Next.js / React using Tailwind and framer-motion for the styles. The email functionality and templating are handled by Resend, and
          the site is deployed on Render.
        </p>
        <p>
          Jake wanted a simple, clean, easy to update site to showcase his work, and I think we nailed it! Check it out via the link below.
        </p>
      </>
    ),
  },
  {
    title: "Sorted: A Sorting Algorithm Visualizer",
    imgSrc: "../../../sortedHero.png",
    code: "https://github.com/Drewthurm21/sortedapp",
    projectLink: "https://sortedapp.vercel.app/",
    tech: ["Next.js", "React", "Tailwind", "Framer-Motion", "Vercel", "Algorithms"],
    description: "Ever wondered what the machine elves actually doing inside your PC? I explain that here.",
    modalContent: (
      <>
        <p>
          An app I made to help my students learn sorting algorithms by seeing them work in real time.
          I&apos;ve written articles covering the strategy behind each algorithm, and the tradeoffs we make when selecting them.
          It&apos;s a great way to learn about how sorting algorithms work, and how they differ from one another.
        </p>
        <p>
          The tech stack? Next.js with React using context for state management. I chose Tailwind for styling, and framer-motion for animations. It&apos;s deployed on Vercel.
        </p>
        <p>
          If you&apos;re interested in how something like this is built I&apos;ve also created a dev notes blog. It covers my thoughts on implementations and tradeoffs I consider while building.
          It&apos;s in the wiki of the github repo. Check it out!
        </p>
        <p>
          So far I&apos;ve completed:
          <p>Dev notes blog started in wiki</p>
          <p>Bubble sort article and visualizer completed</p>
          <p>Insertion sort article</p>
        </p>
        <p>
          Features coming soon:
          <p>Visualizer for insertion sort</p>
          <p>Article and visualizer for Merge Sort, </p>
          <p>Article and graphs for time and space complexity - BigO</p>
          <p>*Expand to include search algos?</p>
          <p>*Expand to include pathing algos?</p>
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
    description: "Wanna know what it's like to trade millions from the comfort of your own couch? I made an app for that.",
    modalContent: (
      <>
        <p>
          A sidekick to the popular stock trading website RobinHood.com, LittleJohn
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
