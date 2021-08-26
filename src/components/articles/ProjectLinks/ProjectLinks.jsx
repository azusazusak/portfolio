import { Link } from 'react-router-dom';
import './ProjectLinks.scss';
import Button from "../../commonParts/Button/Button";
import earth from "../../../assets/imgs/web.png";
import github from "../../../assets/imgs/github-brands.png";
import ArrowL from "../../commonParts/arrows/ArrowL";
import ArrowR from "../../commonParts/arrows/ArrowR";

export default function ProjectLinks({siteLink, githubLink, prevProjectName, nextProjectName, pass}) {

  let websiteButton;
  let githubButton;
  let webpass;

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

  if (pass) {
    webpass =
      <div className="webpass">
        <h4>Pass for Live Website</h4>
        <div className="code">
          <p>Username: <span>{pass.username}</span></p>
          <p>Password: <span>{pass.password}</span></p>
        </div>
      </div>
  }

  return (
    <article className="projectLinks">
      <div className="buttonBox">
        {websiteButton}
        {githubButton}
      </div>
      {webpass}
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