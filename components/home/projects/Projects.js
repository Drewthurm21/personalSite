import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <div>PROJECT CARD</div>;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "LittleJohn",
    imgSrc: "",
    code: "https://github.com/Drewthurm21/littleJohn",
    projectLink: "https://littlejohn-oqy7.onrender.com/",
    tech: ["React", "Redux", "Python", "Flask", "APIs"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          A pared-down clone of the popular stock trading website RobinHood.com, LittleJohn (see what I did there) has been a
          really fun project to work on and figure out.
        </p>
        <p>
          The tech stack is Python & Flask on the backend, with SQLAlchemy being the chosen ORM. The frontend is built in React & Redux is utilized for state management.
          This app leverages the FinnHub and AlphaVantage APIs for all company info and stock history, as well as market news.
          It is deployed on Render.
        </p>
        <p>
          This is a WIP project, with the following features implemented:
          Users & authentication
          Stock lookup & history
          Real-time graphs via websockets
          Portfolios & Trades
          Watchlists
        </p>
        <p>
          And the following features to come!
          Add / edit payment methods - safely store payment methods for cash deposits
          Stock history controls - select from multiple data sets, and graph styles
          ChatGPT integrations - a chat bot for users to ask stock or market questions
        </p>
      </>
    ),
  },
];
