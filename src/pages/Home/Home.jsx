import React from "react";

import FlyoutNavi from "../../components/layout/FlyoutNavi/FlyoutNavi";
import Hello from "../../components/articles/Hello/Hello";
import About from "../../components/articles/About/About";
import Projects from "../../components/articles/Projects/Projects";
import Skills from "../../components/articles/Skills/Skills";
import Contact from "../../components/articles/Contact/Contact";

export default function Home() {

  return (
    <React.Fragment>
      <section className="pageContainer">
        <FlyoutNavi />
        <div className="pageContentWrapper">
          <div className="pageContents">
            <Hello />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </section>
    </React.Fragment>
  );

}