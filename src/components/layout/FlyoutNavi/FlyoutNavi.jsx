import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './FlyoutNavi.scss';
import logo from './imgs/puff_logo.png';

export default function FlyoutNavi() {

  const [flyoutToggle, setFlyoutToggle] = useState(false);

  const changeFlyoutHandler = () => {
    setFlyoutToggle(prevCheck => !prevCheck);
  }

  const changeLinkHandler = () => {
    document.getElementById("menu-btn-check").checked = false;
  }

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let location = useLocation();

  return (
    <div id="flyoutNavi" className={`${flyoutToggle ? "active" : ""}`}>
      <input type="checkbox" id="menu-btn-check" onChange={changeFlyoutHandler}></input>
      <label htmlFor="menu-btn-check" className="menu-btn"><span></span></label>
      <div id="flyoutContainer">
        <div className="top">
          <Link
            to="/" 
            className="logoBox" 
            onClick={() => {
              changeFlyoutHandler();
              changeLinkHandler();
              returnTop();
            }}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <h2>Azusa Kunigo</h2>
          <h4>Full Stack Web Developer</h4>
        </div>      
        <nav id="naviLinks">
          <HashLink 
            smooth to="/#about" 
            className={`${location.pathname}${location.hash}` === "/#about" ? "naviLink active" : "naviLink"}
            onClick={() => {
              changeFlyoutHandler();
              changeLinkHandler();
            }}>
            About
          </HashLink>
          <HashLink 
            smooth to="/#projects" 
            className={`${location.pathname}${location.hash}` === "/#projects" ? "naviLink active" : "naviLink"}
            onClick={() => {
              changeFlyoutHandler();
              changeLinkHandler();
            }}>
            Projects
          </HashLink>
          <HashLink 
            smooth to="/#skills" 
            className={`${location.pathname}${location.hash}` === "/#skills" ? "naviLink active" : "naviLink"}
            onClick={() => {
              changeFlyoutHandler();
              changeLinkHandler();
            }}>
            Skills
          </HashLink>
          <HashLink 
            smooth to="/#contact" 
            className={`${location.pathname}${location.hash}` === "/#contact" ? "naviLink active" : "naviLink"}
            onClick={() => {
              changeFlyoutHandler();
              changeLinkHandler();
            }}>
            Contact
          </HashLink>
        </nav>
      </div>
    </div>
  );

}