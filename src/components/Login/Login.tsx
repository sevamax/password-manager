import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setUser } from '../../store/userSlice';
import { auth } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import ValidationError from '../ValidationError/ValidationError';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [validError, setValidError] = useState('');

  const handleLogin = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          id: user.uid,
          email: user.email || '',
          token: user.refreshToken,
        }));
        navigate('/');
      })
      .catch((error) => {
        setValidError(error.message);
        setTimeout(() => setValidError(''), 8000);
      });
  };

  return isAuth ? <Navigate to="/" />
    : (
      <>
        <Form
          title="Login"
          handleClick={handleLogin}
        />
        {validError && <ValidationError errorText={validError} /> }
      </>
    );
}

export default Login;
