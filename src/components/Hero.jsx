import Button from './Button';
import BrandMark from './BrandMark';

function Hero({ stats, featuredOrder }) {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow-pill">Campus food delivery, rethought</span>
          <BrandMark className="hero__brand" link={false} showTagline />
          <h1>Skip the line. Order between classes. Eat where classes happen.</h1>
          <p className="hero__text">
            CampusCrave helps students order food from campus spots, get it dropped outside the classroom or at the dorm, and powers on-campus jobs through student delivery runners.
          </p>

          <div className="hero__actions">
            <Button to="/restaurants">Browse Restaurants</Button>
            <Button to="/become-a-runner" variant="secondary">
              Become a Campus Runner
            </Button>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-card hero-card--primary">
            <div className="hero-card__topline">
              <span className="hero-badge">Live on campus</span>
              <span className="hero-badge hero-badge--soft">Runner matched</span>
            </div>
            <h2>{featuredOrder.restaurantName}</h2>
            <p className="hero-card__destination">Drop-off: {featuredOrder.destination}</p>
            <div className="hero-card__statusRow">
              <div>
                <span className="detail-kicker">Status</span>
                <strong>{featuredOrder.status}</strong>
              </div>
              <div>
                <span className="detail-kicker">ETA</span>
                <strong>{featuredOrder.eta}</strong>
              </div>
            </div>
            <div className="hero-card__runner">
              <span className="hero-card__runnerAvatar">CR</span>
              <div>
                <span className="detail-kicker">Campus Runner</span>
                <strong>{featuredOrder.runnerName}</strong>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card--secondary">
            <span className="detail-kicker">Why students love it</span>
            <ul className="hero-list">
              <li>Order campus food without leaving the building</li>
              <li>Drop-offs built for classrooms, dorms, and study spots</li>
              <li>Every delivery supports student jobs on campus</li>
              <li>Offers work study opportunities for students</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
