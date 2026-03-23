import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const missionPillars = [
  {
    title: 'Student convenience',
    description: 'CampusCrave turns short breaks into enough time to actually eat, recharge, and get back to class without the scramble.',
  },
  {
    title: 'Campus community',
    description: 'The app is designed around campus geography, campus habits, and the places students already spend their time.',
  },
  {
    title: 'Student job creation',
    description: 'By powering deliveries with students, the product keeps flexible work and extra income inside the campus ecosystem.',
  },
];

function AboutPage() {
  return (
    <div className="page page--about">
      <section className="page-hero container card-surface">
        <div>
          <span className="section-header__eyebrow">About CampusCrave</span>
          <h1>Your Campus. Your Cravings. Delivered.</h1>
          <p>
            CampusCrave is built for college life: busy schedules, short breaks, long study nights, and the constant need for food that arrives where students already are.
          </p>
          <div className="page-hero__actions">
            <Button to="/restaurants">Explore restaurants</Button>
            <Button to="/become-a-runner" variant="secondary">
              Become a Campus Runner
            </Button>
          </div>
        </div>
        <div className="info-panel info-panel--blue">
          <span className="detail-kicker">CampusCrave mission</span>
          <strong>Make on-campus meals feel as easy as ordering a rideshare.</strong>
          <p>Fast delivery, familiar handoff points, and a student-powered network that keeps momentum on campus.</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Why it matters"
          title="A service built around how students actually move through the day"
          description="Every part of the experience is shaped around speed, clarity, and community impact."
        />
        <div className="benefits-grid">
          {missionPillars.map((pillar, index) => (
            <article className="benefit-card card-surface" key={pillar.title}>
              <span className="benefit-card__tag">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container narrative-block card-surface card-surface--subtle">
          <SectionHeader
            eyebrow="Vision"
            title="Campus delivery that feels native to student life"
            description="From library steps to dorm lobbies, CampusCrave is about making meal access feel fast, local, and unmistakably campus-first."
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
