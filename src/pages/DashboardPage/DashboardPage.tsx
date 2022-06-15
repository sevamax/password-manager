import { useState } from 'react';
import PasswordsList from '../../components/PasswordsList/PasswordsList';
import InputField from '../../components/InputField/InputField';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { addPassword } from '../../store/passwordSlice';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const DashboardPage = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const {isAuth} = useAuth();
  
  return isAuth ? (
    <div>
      <Header />
      <InputField 
        text={text}
        name={name}
        handleTextInput={setText}
        handleNameInput={setName}
        handleSubmit={() => { 
          dispatch(addPassword({text, name}));
          if (text.trim() && name.trim()) {
            setText('');
            setName('');
          }
        }}
      />
      <PasswordsList />
    </div>
  ) : (
    <Navigate to="login" />
  )
}

export default DashboardPage;