import SectionHeader from "@/components/utils/SectionHeader";
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
    title: "LittleJohn",
    imgSrc: "../../../littleJohnHero.PNG",
    code: "https://github.com/Drewthurm21/littleJohn",
    projectLink: "https://littlejohn-oqy7.onrender.com/",
    tech: ["Node.js", "React", "Redux", "Python", "Flask", "SQLAlchemy", "APIs", "Socket.io"],
    description: "Have you ever wondered what it would be like to cause your own financial meltown on wall street?  Well now you can!",
    modalContent: (
      <>
        <p>
          A pared-down clone of the popular stock trading website RobinHood.com, LittleJohn
          (see what I did there?) is a WIP stock trading app w/ monopoly money.
        </p>
        <p>
          The tech stack is Python & Flask on the backend, with SQLAlchemy being the chosen ORM. The frontend is built in React & Redux is utilized for state management.
          This app leverages the FinnHub and AlphaVantage APIs for all company info and stock history, as well as market news.
          It is deployed on Render.
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
