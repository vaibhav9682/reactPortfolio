import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vaibhav</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            <p className="typing-text">
              Developer<span className="cursor"></span>
            </p>
          </h1>
          <p className="hero--section-description">
            I bring ideas to life in pixels and code,
            <br /> crafting immersive digital experiences that resonate and
            inspire.
          </p>
        </div>
        <Link to="Contact" spy={true} duration={500} smooth={true}>
          <button style={{ marginTop: "20px" }} className="btn btn-primary">
            Get In Touch
          </button>
        </Link>
      </div>
      <div className="hero--section--img ">
        <img
          src="./img/profile-pic.png"
          alt="Hero Section"
          className="profile-photo"
        />
      </div>
    </section>
  );
}
