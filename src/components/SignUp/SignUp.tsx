import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setUser } from '../../store/userSlice';
import { auth } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import ValidationError from '../ValidationError/ValidationError';

function SignUp(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [validError, setValidError] = useState('');

  const handleRegister = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
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
          title="Register"
          handleClick={handleRegister}
        />
        {validError && <ValidationError errorText={validError} /> }
      </>
    );
}

export default SignUp;
