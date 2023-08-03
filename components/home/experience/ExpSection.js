import { SectionHeader } from "@/components/utils/SectionHeader";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <div> Yo </div>
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Wash & Seal KC",
    position: "Software Engineer",
    time: "2023 - present",
    location: "Overland Park, KS",
    description:
      "Building tools to generate job quote/cost calculations on the fly, consolidate inventory & equipment tracking, and create job-specific supply lists.",
    tech: ['Node', 'React', 'Redux', 'Tailwind', 'SCSS', 'Python', 'Flask', 'SQLAlchemy', 'Vercel'],
  },
  {
    title: "CottageCare",
    position: "Software Engineer",
    time: "2021 - 2023",
    location: "Remote",
    description:
      "Designed and built web applications responsible for quoting and scheduling customers. Automated call center reps' clerical work by integrating 3rd party APIs. Also went on a hike! It was fun.",
    tech: [
      'Node', 'React', 'Redux', 'CSS', 'Python', 'Flask', 'SQLAlchemy', 'Heroku',
      'Email.JS', 'Kendo PDF', 'ActiveCampaign', 'AWS', 'Docker'
    ],
  },
  {
    title: "App Academy",
    position: "Cohort Leader",
    time: "2021 - 2023",
    location: "Remote",
    description:
      "Lead cohorts of 90-120 students through a rigorous 1000hr coding bootcamp, averaging an 82% grad rate. Constructed code-along project and curated lectures. Met with Kush one time. He said he liked Zoom background. I said I liked his hair.",
    tech: [
      'HTML', 'CSS', 'Node', 'JavaScript', 'React', 'Redux', 'Express',
      'Sequelize', 'PostgresQL', 'SQLite', 'Python', 'Flask', 'SQLAlchemy',
      'Alembic', 'Docker', 'Data Structures', 'Algorithms'
    ],
  },
];
