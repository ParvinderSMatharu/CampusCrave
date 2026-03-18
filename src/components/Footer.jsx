import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <BrandMark showTagline link={false} />
          <p className="footer__text">
            CampusCrave makes meal runs feel built for student life, from lecture-to-lunch rushes to late-night dorm cravings.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer__links">
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

        <div>
          <h3>Community</h3>
          <div className="footer__links">
            <Link to="/become-a-runner">Become a Campus Runner</Link>
            <a href="mailto:hello@campuscrave.app">hello@campuscrave.app</a>
            <span>Built for campus convenience</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottomContent">
          <span>CampusCrave MVP demo</span>
          <span>Your Campus. Your Cravings. Delivered.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
