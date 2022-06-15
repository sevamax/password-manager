import { useState, useEffect } from 'react';
import PasswordsList from '../../components/PasswordsList/PasswordsList';
import InputField from '../../components/InputField/InputField';
import Header from '../../components/Header/Header';
import useAppDispatch from '../../hooks/useAppDispatch';
import { addPassword, fetchPasswords } from '../../store/passwordSlice';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';
import { doc, setDoc, addDoc, collection, getDocs  } from "firebase/firestore"; 

const DashboardPage = () => {
  const [password, setPasswords] = useState('');
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const {isAuth, id} = useAuth();

  useEffect(() => {
    dispatch(fetchPasswords(id));
  }, [dispatch]);
  
  return isAuth ? (
    <div>
      <Header />
      <InputField 
        password={password}
        name={name}
        handleTextInput={setPasswords}
        handleNameInput={setName}
        handleSubmit={async () => { 
          dispatch(addPassword({password, name}));
          if (password.trim() && name.trim() && id) {
            await setDoc(doc(db, id,  new Date().toISOString()), {
              id: new Date().toISOString(),
              name,
              password,
              isEditing: false,
            });
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