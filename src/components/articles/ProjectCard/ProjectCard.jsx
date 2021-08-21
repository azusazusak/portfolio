import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';
import Photo from "../../commonParts/Photo/Photo";
import TechIcons from '../../commonParts/TechIcons/TechIcons';

export default function Project({ imagePath, title, subTitle, work, techs, link }) {

  return (
    <div className="projectCard">
      <Link to={link} className="projectCardLink">
        <div className="hoverCover">
          <Photo imagePath={imagePath} />
          <div className="description">
            <h3>{title}</h3>
            <p className="subTitle">{subTitle}</p>
            <p className="work">{work}</p>
            <TechIcons techs={techs} />
          </div>
        </div>
      </Link>
    </div>
  );
}