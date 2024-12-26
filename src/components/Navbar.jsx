import data from '../data/data.json';

const Navbar = ({ activePage, setActivePage }) => {
  const { navItems } = data.navigation;


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
              data-nav-link
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;