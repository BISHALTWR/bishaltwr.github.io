import data from '../data/data.json';

const Courses = () => {
  const { courses } = data;
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Courses & Training</h2>
      </header>

      <section className="courses">
        <ul className="courses-list">
          {courses.map((course, index) => (
            <li key={index} className="course-item">
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <div className="course-content-box">
                  <div className="course-content">
                    <h4 className="h4 course-item-title">{course.title}</h4>
                    <div className="course-meta">
                      <p className="course-category">{course.description}</p>
                      <time dateTime={course.date}>{formatDate(course.date)}</time>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Courses;