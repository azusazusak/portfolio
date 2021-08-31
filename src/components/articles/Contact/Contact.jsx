import React from "react";
import './Contact.scss';
import Button from "../../commonParts/Button/Button";
import github from "../../../assets/imgs/github-brands.png";
import linkedin from "../../../assets/imgs/linkedin-in-brands.png";

export default function Contact() {


  return (
    <article id="contact">
      <h1>Contact Me</h1>
      <p>I would appreciate it if you could contact me.</p>
      <p className="email">azusazusak@gmail.com</p>
      <div className="buttons">
        <Button
          text=""
          image={github}
          shape="circle"
          type="link"
          link="https://github.com/azusazusak"
          newTab="true"
          className="github"
        />
        <Button
          text=""
          image={linkedin}
          shape="circle"
          type="link"
          link="https://www.linkedin.com/"
          newTab="true"
          className="linkedin"
        />
        </div>
    </article>
  );

}