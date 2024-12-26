import data from '../data/data.json';

const About = () => {
  const { about, services, softSkills, technologies } = data.about || {};

  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {about.text && about.text.split('\n').map((paragraph, index) => (
          paragraph.trim() && <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What am I currently Doing:</h3>

        <ul className="service-list">
          {services && services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {softSkills && softSkills.enabled && (
        <section className="testimonials">
          <h3 className="h3 testimonials-title">{softSkills.label}</h3>
          <ul className="testimonials-list has-scrollbar">
            {softSkills.items.map((skill, index) => (
              <li key={index} className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img src={skill.icon} alt={skill.title} width="60" data-testimonials-avatar />
                  </figure>
                  <h4 className="h4 testimonials-item-title" data-testimonials-title>{skill.title}</h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>{skill.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {technologies && (
        <section className="clients">
          <h3 className="h3 clients-title">{technologies.label}</h3>
          <ul className="clients-list has-scrollbar">
            {technologies.items.map((tech, index) => (
              <li key={index} className="clients-item">
                <a href="#">
                  <img src={tech.icon} alt={tech.name} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default About;