import './Projects.scss';
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from '../../../assets/data/projectData.js';

export default function Projects() {

  const projectCards = Object.entries(projectData).map((project, index) => {
    return (
      <ProjectCard
        key={index}
        imagePath={project[1].thumbnail}
        title={project[1].title}
        subTitle={project[1].subTitle}
        work={project[1].work}
        techs={project[1].techs_min}
        link={`/${project[0]}`}
      />
    );
  })

  return (
    <article id="projects">
      <h1>Projects</h1>
      <div className="projectCards">
        {projectCards}
      </div>
    </article>
  );

}