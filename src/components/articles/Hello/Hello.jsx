import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import video from "./videos/video.mp4";
import './Hello.scss';
import face from './imgs/face.png';
import Button from "../../commonParts/Button/Button";

export default function Hello() {

  const [isOpen, setOpen] = useState(false);

  return (
    <article id="hello">
      <ModalVideo 
        channel='custom' 
        url={video} 
        loop="1" 
        isOpen={isOpen} 
        onClose={() => setOpen(false)} 
      />
      <div className="faceImage">
        <img src={face} alt="Azusa Kunigo" className="bounce" />
      </div>
      <div className="container">
        <div className="greeting">
          <h1>Hello I'm Azusa!</h1>
          <p>I'm a full stack web developer and UI/UX designer with a strong marketing background.</p>
        </div>
        <div className="buttonBox">
          <Button 
            text="View My Work"
            image=""
            shape="oval"
            type="anchorLink"
            link="#projects"
            newTab="false"
            className="viewMyWork"
          />
          <button className="btn btn-oval viewVideo" onClick={() => setOpen(true)}>Video</button>
        </div>
      </div>
    </article>
  );

}