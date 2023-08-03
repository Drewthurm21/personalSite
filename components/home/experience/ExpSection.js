import SectionHeader from "@/components/utils/SectionHeader";
import ExpItem from "./ExpItem";

export default function ExpSection() {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item, i) => (
        <ExpItem key={`${i}-${item.title}`} {...item} />
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
      "Building tools to calculate job costs, empowering owner to give fast and accurate quotes on site/on the fly. Integrate inventory & equipment tracking, and create tool to generate job-specific supply checklists for crews. Tagged along for a power washing adventure. Saw a cool demo on antique sealers!",
    tech: ['Node', 'React', 'Redux', 'Tailwind', 'SCSS', 'Python', 'Flask', 'SQLAlchemy', 'Render'],
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
      'Email.JS', 'Kendo PDF', 'ActiveCampaign', 'AWS', 'Docker', 'GitHub'
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
      'HTML', 'CSS', 'Node', 'JavaScript', 'AJAX', 'React', 'Redux', 'Express',
      'Sequelize', 'PostgresQL', 'SQLite', 'Python', 'Flask', 'SQLAlchemy',
      'Alembic', 'Docker', 'Data Structures', 'Algorithms', 'GitHub'
    ],
  },
];
