import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const LoginPage = (): JSX.Element => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>
        or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;