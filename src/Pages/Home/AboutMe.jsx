export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate full-stack web developer with expertise in both
            frontend and backend technologies. Combining creativity with
            technical proficiency, I specialize in crafting visually stunning
            and functionally robust web applications.
          </p>
          <p className="hero--section-description">
            My commitment to efficient database management and algorithmic
            problem-solving ensures seamless user experiences. With a continuous
            thirst for learning, I thrive on translating innovative ideas into
            code, shaping the digital landscape one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
