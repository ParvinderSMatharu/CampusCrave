import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuItemCard from '../components/MenuItemCard';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { restaurants } from '../data/mockData';
import { formatCurrency } from '../utils/formatCurrency';

function MenuPage() {
  const { restaurantId } = useParams();
  const { addToCart, itemCount, subtotal } = useCart();
  const [announcement, setAnnouncement] = useState('');
  const restaurant = restaurants.find((entry) => entry.id === restaurantId);

  if (!restaurant) {
    return (
      <div className="page container section">
        <EmptyState
          title="This menu took a wrong turn"
          description="The restaurant you requested could not be found. Try heading back to the campus food lineup."
          actionLabel="Browse restaurants"
          actionTo="/restaurants"
          secondaryLabel="Go home"
          secondaryTo="/"
        />
      </div>
    );
  }

  const handleAddToCart = (item) => {
    addToCart(item, restaurant);
    setAnnouncement(`${item.name} added to your cart.`);
  };

  return (
    <div className="page page--menu">
      <section className="menu-hero container card-surface">
        <img className="menu-hero__image" src={restaurant.image} alt={restaurant.name} />
        <div className="menu-hero__content">
          <span className="section-header__eyebrow">{restaurant.category}</span>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
          <div className="menu-hero__meta">
            <span>{restaurant.location}</span>
            <span>{restaurant.rating} rating</span>
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="menu-hero__actions">
            <Button to="/cart">View Cart</Button>
            <Button to="/restaurants" variant="ghost">
              Back to Restaurants
            </Button>
          </div>
          {announcement ? <div className="inline-banner">{announcement}</div> : null}
        </div>
        <aside className="menu-hero__summary card-surface card-surface--subtle">
          <span className="detail-kicker">Cart snapshot</span>
          <strong>{itemCount} items</strong>
          <p>{formatCurrency(subtotal)} currently in your cart.</p>
          <Link className="text-link" to="/cart">
            Head to checkout
          </Link>
        </aside>
      </section>

      <section className="section container">
        <div className="menu-grid">
          {restaurant.menu.map((item) => (
            <MenuItemCard key={item.id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
