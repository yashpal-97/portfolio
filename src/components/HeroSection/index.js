import TypeRoles from "./TypeRoles"; 
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero-section">
      <div className="hero__container">
        <div className="hero__intro">
          <p>Hi! my name is Yashpal, I love</p>
          <h1>
            building <span className="hero__color">products</span> and{" "}
            <span className="hero__color">experiences</span>.
          </h1>
          <div className="hero__intro-type"><h2><TypeRoles /></h2></div> 
          <div className="hero__short-intro">
            <p>
              Computer Science and Engineering graduate from NIT Agartala(2021-2025) , mastering Data Structures and Algorithms,
              working as a Software Developer, 
              and building cool stuff.
            </p>
          </div>
        </div>
        <div className="hero__CTA">
          <a href="https://github.com/yashpal-97" className="hero__CTA-button-link" target="blank">
            <button>Check out my works!</button>
          </a>

        </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
