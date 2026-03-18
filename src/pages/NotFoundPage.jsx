import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="page container section">
      <section className="not-found card-surface">
        <span className="not-found__code">404</span>
        <h1>Looks like this page missed the campus map</h1>
        <p>
          The page you requested is not here, but your next meal probably is. Jump back to the home page or browse the restaurant lineup.
        </p>
        <div className="empty-state__actions">
          <Button to="/">Go home</Button>
          <Button to="/restaurants" variant="ghost">
            Browse restaurants
          </Button>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
