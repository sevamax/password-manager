import { useState, useEffect } from 'react';
import PasswordsList from '../../components/PasswordsList/PasswordsList';
import InputField from '../../components/InputField/InputField';
import Header from '../../components/Header/Header';
import useAppDispatch from '../../hooks/useAppDispatch';
import { fetchPasswords, addNewPassword } from '../../store/passwordSlice';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const DashboardPage = () => {
  const [password, setPasswords] = useState('');
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const {isAuth, id} = useAuth();

  useEffect(() => {
    if (id) {
      dispatch(fetchPasswords(id));
    }
  }, [dispatch]);
  
  return isAuth ? (
    <div>
      <Header />
      <InputField 
        password={password}
        name={name}
        handleTextInput={setPasswords}
        handleNameInput={setName}
        handleSubmit={() => { 
          if (password.trim() && name.trim() && id) {
            dispatch(addNewPassword({name, password, userId: id}));
            setPasswords('');
            setName('');
          }
        }}
      />
      <PasswordsList
      />
    </div>
  ) : (
    <Navigate to="login" />
  )
}

export default DashboardPage;