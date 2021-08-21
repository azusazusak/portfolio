import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Button.scss';

export default function Button({ text, image, shape, type, link, newTab, className }) {

  const [activeAnchor, setActiveAnchor] = useState(null);

  if(type === "anchorLink"){

    const changeActiveHandler = e => {
      setActiveAnchor(e.target.textContent);
    };
    return (
      <AnchorLink
        href={link}
        className={`anchorLink btn btn-${shape} ${className} ${activeAnchor === link ? 'activeAnchor' : ''}`}
        onClick={changeActiveHandler}
        offset="20"
      >
        <span>{link}</span>
        {text}
      </AnchorLink>
    )
    
  } else {

    const icon = (image) ? <img src={image} alt="" /> : '';
    const tab = (newTab === "true") ? '_blank' : '_self';

    return (
      <a href={link} className={`btn btn-${shape} ${className}`} target={tab} >
        {icon}
        {text}
      </a>
    );

  }



}