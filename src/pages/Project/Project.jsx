import { useParams } from 'react-router-dom';
import './Project.scss';
import projectData from '../../assets/data/projectData.js';
import FlyoutNavi from "../../components/layout/FlyoutNavi/FlyoutNavi";
import Photo from "../../components/commonParts/Photo/Photo";
import TechIcons from '../../components/commonParts/TechIcons/TechIcons';
import ProjectLinks from '../../components/articles/ProjectLinks/ProjectLinks';
import ScreenShots from '../../components/articles/ScreenShots/ScreenShots';

const Project = () => {

  const projectName = useParams().projectName;
  const data = projectData[projectName];
  const projectLength = Object.entries(projectData).length;
  const prevId = (data.id + projectLength - 1) % projectLength;
  const nextId = (data.id + projectLength + 1) % projectLength;
  const [prevProjectName] = Object.entries(projectData).find((project) => {
    return project[1].id === prevId })
  const [nextProjectName] = Object.entries(projectData).find((project) => {
    return project[1].id === nextId
  })

  let background;
  let screenshots_2;

  if (data.background) {
    background = (
      <>
        <h2>Background of Project</h2>
        <p>{data.background}</p>
      </>
    );
  }

  if (data.screenshots_2) {
    screenshots_2 = (
      <ScreenShots
        screenshots={data.screenshots_2}
      />
    );
  }

  return (
    <>
      <section className="pageContainer">
        <FlyoutNavi />
        <div className="pageContentWrapper">
          <div className="pageContents projectPage">
            <header>
              <h1>{data.title}</h1>
              <p>{data.subTitle}</p>
              <Photo imagePath={data.topImage} />
            </header>
            <article className="projectDescriptions">
              <h2>Technologies</h2>
              <TechIcons techs={data.techs_all} />
              <h2>Goal</h2>
              <p>{data.goal}</p>
              {background}
              <h2>Challenges and Approaches</h2>
              <p>{data.challenges}</p>
            </article>
            <ProjectLinks 
              siteLink={data.siteLink}
              githubLink={data.githubLink}
              prevProjectName={prevProjectName}
              nextProjectName={nextProjectName}
            />
            <ScreenShots 
              screenshots={data.screenshots_1}
            />
            {screenshots_2}
            <ProjectLinks
              siteLink={data.siteLink}
              githubLink={data.githubLink}
              prevProjectName={prevProjectName}
              nextProjectName={nextProjectName}
            />
          </div>
        </div>
      </section>
    </>
  )

}

export default Project;