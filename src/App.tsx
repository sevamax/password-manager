import { useState } from 'react'
import './App.css'
import PasswordsList from './components/PasswordsList/PasswordsList';
import InputField from './components/InpurField/InputField';
import { useDispatch } from 'react-redux';
import { addPassword } from './store/passwordSlice';

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  
  const dispatch = useDispatch();

  return (
    <div className="App">
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
  )
}

export default App
