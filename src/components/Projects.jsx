import { useState } from 'react';
import { IoEyeOutline, IoChevronDown } from 'react-icons/io5';
import data from '../data/data.json';

const toTitleCase = (str) => {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectActive, setSelectActive] = useState(false);

  const { categories, items } = data.projects;

  const filteredProjects = items.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory.toLowerCase()
  );

  return (
    <>
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <div className="filter-select-box">
          <button 
            className={`filter-select ${selectActive ? 'active' : ''}`}
            onClick={() => setSelectActive(!selectActive)}
          >
            <div className="select-value">
              {selectedCategory === 'all' ? 'All' : toTitleCase(selectedCategory)}
            </div>
            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className={`select-list ${selectActive ? 'active' : ''}`}>
            {categories.map((category, index) => (
              <li key={index} className="select-item">
                <button onClick={() => {
                  setSelectedCategory(category.toLowerCase());
                  setSelectActive(false);
                }}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href={project.url} target='_blank'>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{toTitleCase(project.category)}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;