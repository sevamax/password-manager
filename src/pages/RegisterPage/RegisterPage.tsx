import { Navigate, Link } from 'react-router-dom';

const RegisterPage = (): JSX.Element => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;