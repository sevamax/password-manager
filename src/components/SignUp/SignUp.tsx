import { Form } from "../Form/Form";
import useAppDispatch from '../../hooks/useAppDispatch';
import {setUser} from '../../store/userSlice';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate  } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  const handleRegister = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        title="Register"
        handleClick={handleRegister}
      />
    </>
  )
}

export default SignUp;