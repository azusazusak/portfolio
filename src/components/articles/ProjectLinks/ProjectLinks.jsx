import { Link } from 'react-router-dom';
import './ProjectLinks.scss';
import Button from "../../commonParts/Button/Button";
import earth from "../../../assets/imgs/web.png";
import github from "../../../assets/imgs/github-brands.png";
import ArrowL from "../../commonParts/arrows/ArrowL";
import ArrowR from "../../commonParts/arrows/ArrowR";

export default function ProjectLinks({siteLink, githubLink, prevProjectName, nextProjectName}) {

  let websiteButton;
  let githubButton;

  if (siteLink) {
    websiteButton =
      <Button
        text="Live Website"
        image={earth}
        shape="oval"
        type="link"
        link={siteLink}
        newTab="true"
      />
  }

  if (githubLink) {
    githubButton =
      <Button
        text="View Source"
        image={github}
        shape="oval"
        type="link"
        link={githubLink}
        newTab="true"
      />
  }

  return (
    <article className="projectLinks">
      <div className="buttonBox">
        {websiteButton}
        {githubButton}
      </div>
      <div className="linkBox">
        <Link to={`/${prevProjectName}`} className="projectLink">
          <ArrowL />
          Previous Project
        </Link>
        <Link to={`/${nextProjectName}`} className="projectLink">
          Next Project
          <ArrowR />
        </Link>
      </div>
    </article>
  );

}