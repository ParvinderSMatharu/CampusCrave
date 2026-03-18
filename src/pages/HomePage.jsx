import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import RestaurantCard from '../components/RestaurantCard';
import Button from '../components/Button';
import {
  campusStats,
  howItWorks,
  mockOrders,
  restaurants,
  studentBenefits,
} from '../data/mockData';

function HomePage() {
  const featuredRestaurants = restaurants.filter((restaurant) => restaurant.featured).slice(0, 3);

  return (
    <div className="page page--home">
      <Hero featuredOrder={mockOrders[0]} stats={campusStats} />

      <section className="section container">
        <SectionHeader
          eyebrow="Featured restaurants"
          title="Campus favorites that travel well between classes"
          description="Fast campus delivery, bright menus, and spots students actually want to reorder from."
        />
        <div className="restaurant-grid">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        <div className="section__cta">
          <Button to="/restaurants" variant="ghost">
            Explore all campus food spots
          </Button>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <SectionHeader
            eyebrow="How it works"
            title="A smoother way to eat on campus"
            description="CampusCrave is built for the student routine: tight schedules, quick breaks, and familiar campus drop-off points."
            align="center"
          />
          <div className="steps-grid">
            {howItWorks.map((step) => (
              <article className="step-card card-surface" key={step.step}>
                <span className="step-card__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Student benefits"
          title="Convenience that keeps campus energy moving"
          description="The product works for hungry students, busy schedules, and classmates looking for flexible work."
        />
        <div className="benefits-grid">
          {studentBenefits.map((benefit, index) => (
            <article className="benefit-card card-surface" key={benefit.title}>
              <span className="benefit-card__tag">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container campus-pulse">
          <SectionHeader
            eyebrow="Campus pulse"
            title="Recent mock orders happening around campus"
            description="A quick look at the kind of classroom and dorm drop-offs CampusCrave is designed to handle."
          />
          <div className="order-feed">
            {mockOrders.map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-card__row">
                  <span className="hero-badge hero-badge--light">{order.status}</span>
                  <span>{order.id}</span>
                </div>
                <h3>{order.restaurantName}</h3>
                <p>{order.destination}</p>
                <div className="order-card__meta">
                  <span>{order.runnerName}</span>
                  <strong>{order.eta}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
