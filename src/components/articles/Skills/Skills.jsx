import './Skills.scss';

export default function Skills() {


  return (
    <article id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="box">
          <h2>Web Development</h2>
          <p>HTML, CSS, Sass, JavaScript, jQuery, React, React Native, Node, PHP, MySQL, JSON, Ajax, API, Bootstrap, GitHub, JIRA, Trello, WordPress, Agile, Scrum</p>
        </div>
        <div className="box">
          <h2>Design</h2>
          <p>Adobe Illustrator, Photoshop, XD, InDesign, Premiere, After Effects, Figma, Miro, UI/UX Design</p>
        </div>
        <div className="box">
          <h2>Other</h2>
          <p>Branding, SEO Marketing, Project Management</p>
        </div>
      </div>

    </article>
  );

}