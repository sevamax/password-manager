import { useState } from 'react';
import PasswordsList from '../../components/PasswordsList/PasswordsList';
import InputField from '../../components/InpurField/InputField';
import { useDispatch } from 'react-redux';
import { addPassword } from '../../store/passwordSlice';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      {/* <InputField 
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
      <PasswordsList /> */}
      <Navigate to="login" />
    </div>
  );
}

export default DashboardPage;