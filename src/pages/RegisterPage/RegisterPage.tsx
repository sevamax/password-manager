import { Link } from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp';

const RegisterPage = (): JSX.Element => {
  return (
    <div>
      <h1>Register Page</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;