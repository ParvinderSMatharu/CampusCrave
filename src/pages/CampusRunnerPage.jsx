import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { mockOrders, runnerPerks } from '../data/mockData';
import { formatCurrency } from '../utils/formatCurrency';

const runnerSteps = [
  {
    title: 'Set your schedule',
    description: 'Choose lunch, dinner, or late-night windows around your class calendar.',
  },
  {
    title: 'Accept campus orders',
    description: 'Pick up from campus food spots and follow short routes across familiar buildings.',
  },
  {
    title: 'Complete the handoff',
    description: 'Deliver outside lecture halls, dorms, or study spaces and keep the day moving for other students.',
  },
];

function CampusRunnerPage() {
  return (
    <div className="page page--runner">
      <section className="page-hero container card-surface page-hero--runner">
        <div>
          <span className="section-header__eyebrow">Become a Campus Runner</span>
          <h1>Make money between classes by delivering on campus</h1>
          <p>
            Campus Runners give CampusCrave its edge: fast, friendly delivery powered by students who already know the campus map, pace, and rush hours.
          </p>
          <div className="page-hero__actions">
            <Button to="/restaurants">See live demand</Button>
            <Button to="/about" variant="ghost">
              Learn about the mission
            </Button>
          </div>
        </div>
        <div className="info-panel">
          <span className="detail-kicker">Runner snapshot</span>
          <strong>Typical order totals</strong>
          <div className="summary-row">
            <span>Average active basket</span>
            <strong>{formatCurrency(16.98)}</strong>
          </div>
          <div className="summary-row">
            <span>Peak times</span>
            <strong>11:30 AM and 7:00 PM</strong>
          </div>
          <div className="summary-row">
            <span>Best routes</span>
            <strong>Dorms, library, STEM halls</strong>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Runner perks"
          title="Why students would actually want this job"
          description="Flexible shifts, short travel distances, and campus-aware delivery logic make the role fit naturally into student life."
        />
        <div className="benefits-grid">
          {runnerPerks.map((perk, index) => (
            <article className="benefit-card card-surface" key={perk.title}>
              <span className="benefit-card__tag">0{index + 1}</span>
              <h3>{perk.title}</h3>
              <p>{perk.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <SectionHeader
            eyebrow="How running works"
            title="Three quick steps to start delivering"
            description="The role is meant to be simple, mobile, and manageable between classes."
            align="center"
          />
          <div className="steps-grid">
            {runnerSteps.map((step, index) => (
              <article className="step-card card-surface" key={step.title}>
                <span className="step-card__number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Live examples"
          title="The kinds of campus orders runners would handle"
          description="These mock orders show how the product supports short, campus-specific delivery loops."
        />
        <div className="order-feed order-feed--light">
          {mockOrders.map((order) => (
            <article className="order-card order-card--light" key={order.id}>
              <div className="order-card__row">
                <span className="hero-badge">{order.status}</span>
                <span>{order.eta}</span>
              </div>
              <h3>{order.restaurantName}</h3>
              <p>{order.destination}</p>
              <div className="order-card__meta">
                <span>{order.runnerName}</span>
                <strong>{formatCurrency(order.total)}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CampusRunnerPage;
