import { useState } from 'react';
import CartItem from '../components/CartItem';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

function CartPage() {
  const {
    cartItems,
    clearCart,
    deliveryFee,
    deliveryNote,
    removeFromCart,
    setDeliveryNote,
    subtotal,
    total,
    updateQuantity,
  } = useCart();
  const [confirmation, setConfirmation] = useState(null);

  const handleCheckout = () => {
    if (!cartItems.length) {
      return;
    }

    setConfirmation({
      orderId: `CC-${Math.floor(2000 + Math.random() * 7000)}`,
      eta: '14-18 min',
      destination: deliveryNote || 'your selected campus handoff point',
      total,
    });
    clearCart();
    setDeliveryNote('');
  };

  if (!cartItems.length && !confirmation) {
    return (
      <div className="page container section">
        <EmptyState
          title="Your cart is ready when your cravings are"
          description="Add a few campus favorites, then send them to your dorm, study spot, or outside the classroom."
          actionLabel="Browse restaurants"
          actionTo="/restaurants"
          secondaryLabel="Back home"
          secondaryTo="/"
        />
      </div>
    );
  }

  return (
    <div className="page page--cart container section">
      {confirmation ? (
        <section className="checkout-success card-surface">
          <span className="section-header__eyebrow">Mock checkout complete</span>
          <h1>Order {confirmation.orderId} is locked in</h1>
          <p>
            Your Campus Runner is being matched now. Expect a drop-off at {confirmation.destination} in about {confirmation.eta}.
          </p>
          <div className="checkout-success__meta">
            <span>Total charged: {formatCurrency(confirmation.total)}</span>
            <span>No backend yet, so this confirmation is local only.</span>
          </div>
          <div className="empty-state__actions">
            <Button to="/restaurants">Order again</Button>
            <Button to="/become-a-runner" variant="ghost">
              Become a Campus Runner
            </Button>
          </div>
        </section>
      ) : null}

      {cartItems.length ? (
        <div className="cart-layout">
          <section>
            <div className="section-header">
              <span className="section-header__eyebrow">Cart</span>
              <h1>Your campus drop-off order</h1>
              <p>Adjust quantities, leave a note for the runner, and mock-checkout when you are ready.</p>
            </div>

            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                  onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          </section>

          <aside className="cart-summary card-surface">
            <span className="detail-kicker">Delivery note</span>
            <textarea
              className="cart-note"
              placeholder="Leave outside Room 204, text when you arrive, use east entrance..."
              rows="5"
              value={deliveryNote}
              onChange={(event) => setDeliveryNote(event.target.value)}
            />

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <div className="summary-row">
              <span>Campus delivery</span>
              <strong>{formatCurrency(deliveryFee)}</strong>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <Button fullWidth onClick={handleCheckout}>
              Mock Checkout
            </Button>
            <Button fullWidth onClick={clearCart} variant="ghost">
              Clear Cart
            </Button>
            <p className="cart-summary__caption">
              Orders are stored in localStorage so your cart stays put while you browse.
            </p>
          </aside>
        </div>
      ) : null}
    </div>
  );
}

export default CartPage;
