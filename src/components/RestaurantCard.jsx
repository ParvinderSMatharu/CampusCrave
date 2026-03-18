import Button from './Button';

function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card">
      <div className="restaurant-card__imageWrap">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-card__chips">
          {restaurant.tags.map((tag) => (
            <span className="pill-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="restaurant-card__content">
        <div className="restaurant-card__row">
          <span className="detail-kicker">{restaurant.category}</span>
          <span className="rating-pill">{restaurant.rating} rating</span>
        </div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>

        <div className="restaurant-card__meta">
          <span>{restaurant.location}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>

        <Button fullWidth to={`/restaurants/${restaurant.id}`}>
          View Menu
        </Button>
      </div>
    </article>
  );
}

export default RestaurantCard;
