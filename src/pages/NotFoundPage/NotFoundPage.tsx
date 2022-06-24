import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">Back to the Dashboard</Link>
    </div>
  );
}

export default NotFoundPage;
