import data from '../data/data.json';
import { IoBookOutline, IoBusinessOutline, IoDownloadOutline } from 'react-icons/io5';

const Resume = () => {
  const { education, experience, skills, languages } = data.resume || {};

  const getSkillLevelClass = (level) => {
    const levels = {
      beginner: 'beginner',
      novice: 'novice',
      skillful: 'skillful',
      experienced: 'experienced',
    };
    return levels[level.toLowerCase()] || '';
  };

  return (
    <>
      <header>
      <h2 className="h2 article-title">Resume</h2>
      <a 
        href="/CV.pdf" 
        download 
        className="form-btn"
        style={{ 
          width: 'auto', 
          marginLeft: 'auto',
          padding: '8px 16px',
          marginTop: '10px',
          marginBottom: '20px'
        }}
      >
        <IoDownloadOutline />
        <span>Download CV</span>
      </a>
    </header>

      {education && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>
            <h3 className="h3">{education.title}</h3>
          </div>

          <ol className="timeline-list">
            {education.items.map((item, index) => (
              <li key={index} className="timeline-item">
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>{item.institution}</span>
                <span>{item.year}</span>
                <p className="timeline-text">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {experience && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBusinessOutline />
            </div>
            <h3 className="h3">{experience.title}</h3>
          </div>

          <ol className="timeline-list">
            {experience.items.map((item, index) => (
              <li key={index} className="timeline-item">
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>{item.institution}</span>
                <span>{item.year}</span>
                <p className="timeline-text">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

{skills && (
  <section className="skill">
    <h3 className="h3 skills-title">My skills</h3>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skills-item">
          <div className="skill-content">
            <h5 className="h5 skill-name">{skill.name}</h5>
            <span className="skill-level-text">{skill.level}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
)}

      {languages && (
        <section className="skill">
          <h3 className="h3 skills-title">Languages</h3>
          <ul className="skills-list content-card">
            {languages.map((language, index) => (
              <li key={index} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{language.name}</h5>
                  <data value={language.level}>{language.level}%</data>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill"
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Resume;