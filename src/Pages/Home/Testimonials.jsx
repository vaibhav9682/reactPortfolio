import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Certification</p>
          <h2 className="sections--heading">Tech Certificate</h2>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <a href={item.Link} target="_blank" key={index}>
            <div key={index} className="testimonial--section--card">
              <div className="testimonial--section--card--author--detail">
                <img src={item.src} alt="Avatar" />
              </div>

              <div className="testimonial--section--card--review">
                {item.tech.map((tech, i) => (
                  <img src={tech} key={i} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
