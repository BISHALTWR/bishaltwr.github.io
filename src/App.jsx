import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
        <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        <article className={`about ${activePage === 'about' ? 'active' : ''}`}>
          <About />
        </article>

        <article className={`resume ${activePage === 'resume' ? 'active' : ''}`}>
          <Resume />
        </article>

        <article className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`}>
          <Projects />
        </article>

        <article className={`blog ${activePage === 'blog' ? 'active' : ''}`}>
          <Blog />
        </article>

        <article className={`contact ${activePage === 'contact' ? 'active' : ''}`}>
          <Contact />
        </article>
      </div>
    </main>
  )
}

export default App