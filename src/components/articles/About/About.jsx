import './About.scss';
import Photo from "../../commonParts/Photo/Photo";
import about_1 from "./imgs/about_1.jpg";
import about_2 from "./imgs/about_2.jpg";
import about_3 from "./imgs/about_3.jpg";
import about_4 from "./imgs/about_4.jpg";

export default function About() {

  return (
    <article id="about">
      <h1>About Me</h1>
      <div className="container">
        <div className="photoBox">
          <div className="aboutPhoto">            
            <Photo imagePath={about_1} />
            <div className="hoverCover">
              <p>Cairo, Egypt</p>
            </div>            
          </div>
          <div className="aboutPhoto">
            <Photo imagePath={about_2} />
            <div className="hoverCover">
              <p>Easter Island, Chile</p>
            </div>
          </div>
          <div className="aboutPhoto">
            <Photo imagePath={about_3} />
            <div className="hoverCover">
              <p>Kingston, Jamaica</p>
            </div>
          </div>
          <div className="aboutPhoto">
            <Photo imagePath={about_4} />
            <div className="hoverCover">
              <p>Yellowknife, Canada</p>
            </div>
          </div>
        </div>
        <div className="textBox">
          <p>I'm a full-stack web developer with a passion for creating sophisticated, interactive applications that move people's hearts. I always enjoy the challenge of pursuing new knowledge in order to fully grasp the client's thoughts and implement a website that exceeds their expectations. My decade-long career as a marketer has contributed to my understanding of clients' business models and building strategic websites from both design and coding perspectives.</p>
          <p>I was born and raised in Tokyo, Japan and currently living in Vancouver, Canada. I love to travel the world and drink beer. I enjoy my days off visiting local breweries and hiking.</p>
        </div>        
      </div>

    </article>
  );

}