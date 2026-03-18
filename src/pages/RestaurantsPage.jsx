import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import RestaurantCard from '../components/RestaurantCard';
import { restaurantCategories, restaurants } from '../data/mockData';

function RestaurantsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRestaurants =
    activeCategory === 'All'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === activeCategory);

  return (
    <div className="page page--restaurants">
      <section className="page-hero page-hero--compact container">
        <SectionHeader
          eyebrow="Restaurants"
          title="Discover campus food spots built for class-break delivery"
          description="Filter by category, compare vibes, and jump straight into the menu that fits your day."
        />

        <div className="filter-row" aria-label="Restaurant categories">
          {restaurantCategories.map((category) => (
            <button
              key={category}
              className={`filter-chip ${activeCategory === category ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RestaurantsPage;
