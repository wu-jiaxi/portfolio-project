import "./aboutTitle.css";
import AboutButtons from "./AboutButtons";
import LaptopTwoToneIcon from "@mui/icons-material/LaptopTwoTone";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import htmlPicture from "../Projects/pictures/html.png";
import profilePicture from "../Projects/pictures/jiaxi.jpg";

export default function About() {
  return (
    <div>
      <div id="aboutTitleContainer">
        <div className="aboutTitle">
          <h1>My Expertise</h1>
          <hr className="line"></hr>
        </div>
      </div>
      <div id="threeSkills">
        <div className="skills">
          <div className="skillsInner">
            <div className="skillsIcon">
              <div className="icon">
                <LaptopTwoToneIcon fontSize="large" />
              </div>
              <div>
                <h3>Software Engineer</h3>
              </div>
            </div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  Experienced in both functional and OOP: JavaScript,
                  TypeScript.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skillsInner">
            <div className="skillsIcon">
              <div className="icon">
                <ScienceOutlinedIcon fontSize="large" />
              </div>
              <div>
                <h3>Frontend Developer</h3>
              </div>
            </div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  Passionate about UI/UX. Over 4 years of development experience
                  in HTML, CSS, JS, React and Angular frameworks.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div id="webDesignerSection">
            <div className="skillsIcon">
              <div className="icon">
                <ColorLensOutlinedIcon fontSize="large" />
              </div>
              <div>
                <h3>Web Designer</h3>
              </div>
            </div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  Creating seamless and fluid applications.
                  <br />
                  Figma, Canva, Wordpress, Adobe, Trello
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="htmlPictureContainer">
        <img id="htmlPicture" src={htmlPicture} alt="html"></img>
      </div>
      <div id="aboutMeSection">
        <div id="aboutMeWrap">
          <div id="aboutMeTextSection">
            <div id="aboutMeText">
              <div id="knowMeTextContainer">
                <h1 id="knowMeText">Get To Know Me</h1>
                <hr className="line"></hr>
              </div>
              <div id="aboutMeTextParagraphs">
                <p>
                  I am a Software Engineer/Full Stack Developer who enjoys
                  designing and building fluid web applications that leads to
                  the success of the overall business. From a young age,
                  technology and design always fascinated me and has played a
                  huge impact in my life as well as paying several dividends. It
                  pays to be able to fix your own tech!
                </p>
                <p>
                  Always improving, I strive to constantly study and better my
                  tools. I can be found working on new projects, learning new
                  languages, and keeping up to date with AI trends. In my free
                  time I am visiting musuems, national parks, and enjoying
                  nature
                </p>
                <p>
                  I am open to job opportunities where I can contribute, learn
                  and grow. If you have an opportunity that matches my
                  technology stack and skills then don't hesitate to contact me.
                  Lets build something awesome.
                </p>
              </div>
              <div id="technology">
                <AboutButtons />
              </div>
            </div>
            <img src={profilePicture} id="pictureJiaxi"></img>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
