import data from '../data/data.json';

const Blog = () => {
  const {posts} = data.blog
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href={post.url}>
                <figure className="blog-banner-box">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;