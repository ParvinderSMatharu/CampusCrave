import { formatCurrency } from '../utils/formatCurrency';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cart-item card-surface">
      <img className="cart-item__image" src={item.image} alt={item.name} />

      <div className="cart-item__details">
        <div>
          <span className="detail-kicker">{item.restaurantName}</span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>

        <div className="cart-item__footer">
          <div className="quantity-control" aria-label={`Quantity controls for ${item.name}`}>
            <button type="button" onClick={onDecrease}>
              -
            </button>
            <span>{item.quantity}</span>
            <button type="button" onClick={onIncrease}>
              +
            </button>
          </div>

          <button className="cart-item__remove" type="button" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>

      <strong className="cart-item__price">{formatCurrency(item.price * item.quantity)}</strong>
    </article>
  );
}

export default CartItem;
