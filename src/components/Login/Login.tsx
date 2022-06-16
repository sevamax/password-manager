import { Form } from "../Form/Form";
import useAppDispatch from '../../hooks/useAppDispatch';
import {setUser} from '../../store/userSlice';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase";
import { useNavigate  } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  const handleLogin = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        id: user.uid,
        email: user.email,
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
        title="Login"
        handleClick={handleLogin}
      />
    </>
  )
}

export default Login;