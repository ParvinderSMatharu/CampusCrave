import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import BrandMark from './BrandMark';

const navigationItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/restaurants', label: 'Restaurants' },
  { to: '/about', label: 'About' },
  { to: '/become-a-runner', label: 'Campus Runner' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const cartLabel = itemCount > 0 ? `Cart (${itemCount})` : 'Cart';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary navigation">
        <BrandMark compact />

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__panel ${menuOpen ? 'is-open' : ''}`}>
          <div className="navbar__links">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'is-active' : ''}`
                }
                end={item.end}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink className="navbar__cart" to="/cart">
            <span>{cartLabel}</span>
            <span className="navbar__cartBadge">{itemCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
