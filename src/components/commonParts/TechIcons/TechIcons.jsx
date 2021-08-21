import React from 'react';
import './TechIcons.scss';

export default function TechIcons({ techs }) {

  const technologies = techs.map((tech, index) =>
    <div className="tech" key={index}>{tech}</div>
  );

  return (
    <div className="techs">
      {technologies}
    </div>
  );
}