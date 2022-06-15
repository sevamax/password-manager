import { Form } from "../Form/Form";
import useAppDispatch from '../../hooks/useAppDispatch';
import {setUser} from '../../store/userSlice';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate  } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        id: user.uid,
        email: user.email,
        token: user.refreshToken,
      }));
      navigate('/');
    })
    .catch(console.error)
  }

  return isAuth ? <Navigate to='/' />
  : (
    <>
      <Form 
        title="Login"
        handleClick={handleLogin}
      />
    </>
  )
}

export default Login;