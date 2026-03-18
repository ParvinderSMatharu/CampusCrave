import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.svg';

function BrandMark({ compact = false, showTagline = false, link = true, className = '' }) {
  const classes = ['brand-mark', compact ? 'brand-mark--compact' : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <img className="brand-mark__icon" src={logoMark} alt="CampusCrave logo" />
      <span>
        <strong className="brand-mark__title">CampusCrave</strong>
        {showTagline ? (
          <span className="brand-mark__tagline">Your Campus. Your Cravings. Delivered.</span>
        ) : null}
      </span>
    </>
  );

  if (!link) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link className={classes} to="/" aria-label="CampusCrave home">
      {content}
    </Link>
  );
}

export default BrandMark;
