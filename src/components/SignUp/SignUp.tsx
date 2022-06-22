import { Form } from '../Form/Form';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setUser } from '../../store/userSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Navigate  } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  const handleRegister = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          id: user.uid,
          email: user.email || '',
          token: user.refreshToken,
        }));
        navigate('/');
      })
      .catch((error) => {alert(error)})
  }

  return isAuth ? <Navigate to='/' />
  : (
    <>
      <Form 
        title="Register"
        handleClick={handleRegister}
      />
    </>
  )
}

export default SignUp;