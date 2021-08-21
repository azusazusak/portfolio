import { useParams, Link } from 'react-router-dom';
import './Project.scss';
import projectData from '../../assets/data/projectData.js';
import FlyoutNavi from "../../components/layout/FlyoutNavi/FlyoutNavi";
import Photo from "../../components/commonParts/Photo/Photo";
import TechIcons from '../../components/commonParts/TechIcons/TechIcons';
import Button from "../../components/commonParts/Button/Button";
import earth from "../../assets/imgs/web.png";
import github from "../../assets/imgs/github-brands.png";
import ArrowL from "../../components/commonParts/arrows/ArrowL";
import ArrowR from "../../components/commonParts/arrows/ArrowR";

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
  let websiteButton;
  let githubButton;

  if (data.background) {
    background = (
      <>
        <h2>Background of Project</h2>
        <p>{data.background}</p>
      </>
    );
  }

  if (data.siteLink) {
    websiteButton =
      <Button
        text="Live Website"
        image={earth}
        shape="oval"
        type="link"
        link={data.siteLink}
        newTab="true"
      />
  }

  if (data.githubLink) {
    githubButton = 
      <Button
        text = "View Source"
        image = { github }
        shape = "oval"
        type = "link"
        link={data.githubLink}
        newTab = "true"
      />    
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
            <article className="links">
              <div className="buttonBox">
                {websiteButton}
                {githubButton}
              </div>
            </article>
            <article className="projectLinks">
              <div className="linkBox">
                <Link to={`/${prevProjectName}`} className="projectLink">
                  <ArrowL/>
                  Previous Project
                </Link>
                <Link to={`/${nextProjectName}`} className="projectLink">
                  Next Project
                  <ArrowR />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )

}

export default Project;