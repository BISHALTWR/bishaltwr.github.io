import { useState } from 'react';
import data from '../data/data.json';

const Videos = () => {
  const { videos } = data;
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredVideos = selectedLevel === 'All'
    ? videos
    : videos.filter(video => video.level === selectedLevel);

    if (!videos || videos.length === 0) {
      return (
        <>
        <header className="videos-header">
        <h2 className="h2 article-title">Videos</h2>
      </header>
            <section className="no-content">
          <div className="empty-content">
            <p className="empty-text">No videos yet... check back soon!</p>
          </div>
        </section>
        </>
      );
    }

  const levels = ['All', ...new Set(videos.map(video => video.level))];

  return (
    <>
      <header className="videos-header">
        <h2 className="h2 article-title">Videos</h2>
      </header>

      <div className="filter-buttons">
        {levels.map((level, index) => (
          <button
            key={index}
            className={`filter-button ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <section className="videos">
        <ul className="videos-list">
          {filteredVideos.map((video, index) => (
            <li key={index} className="video-item">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <figure className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" />
                </figure>
                <div className="video-content">
                  <h3 className="h3 video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Videos;