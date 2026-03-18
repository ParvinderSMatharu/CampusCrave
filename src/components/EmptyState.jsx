import Button from './Button';
import emptyCartImage from '../assets/empty-cart.svg';

function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="empty-state card-surface">
      <img className="empty-state__image" src={emptyCartImage} alt="Illustration of an empty cart" />
      <div className="empty-state__content">
        <span className="section-header__eyebrow">CampusCrave</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="empty-state__actions">
          <Button to={actionTo}>{actionLabel}</Button>
          {secondaryLabel && secondaryTo ? (
            <Button to={secondaryTo} variant="ghost">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default EmptyState;
