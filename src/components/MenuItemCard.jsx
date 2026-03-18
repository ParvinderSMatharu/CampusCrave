import Button from './Button';
import { formatCurrency } from '../utils/formatCurrency';

function MenuItemCard({ item, onAdd }) {
  return (
    <article className="menu-item-card">
      <img className="menu-item-card__image" src={item.image} alt={item.name} />
      <div className="menu-item-card__body">
        <div className="menu-item-card__heading">
          <h3>{item.name}</h3>
          <strong>{formatCurrency(item.price)}</strong>
        </div>
        <p>{item.description}</p>
        <Button onClick={() => onAdd(item)} variant="primary">
          Add to Cart
        </Button>
      </div>
    </article>
  );
}

export default MenuItemCard;
