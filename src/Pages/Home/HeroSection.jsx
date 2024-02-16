export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vaibhav</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            <p class="typing-text">
              Developer<span class="cursor"></span>
            </p>
          </h1>
          <p className="hero--section-description">
            I bring ideas to life in pixels and code,
            <br /> crafting immersive digital experiences that resonate and
            inspire.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img ">
        
        <img
          src="./img/profile-pic.png"
          alt="Hero Section"
          class="profile-photo"
        />
      </div>
    </section>
  );
}
