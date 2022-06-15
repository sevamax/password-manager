import {InputFieldContainer} from './styledComponent/InputFieldContainer'
import { useRef } from 'react';
import { addFocus, removeFocus } from '../../functions/focus';
import { useAuth } from 'hooks/useAuth';

interface PasswordItemProps {
  password: string,
  name: string,
  handleTextInput: (str: string) => void,
  handleNameInput: (str: string) => void,
  handleSubmit: any,
};

const InputField: React.FC<PasswordItemProps> = ({password, name, handleTextInput, handleNameInput, handleSubmit}) => {
  const inputNameWrapper = useRef<HTMLDivElement | null>(null);
  const inputPasswordWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <InputFieldContainer>
      <h1>Dashboard</h1>
      <form 
        method='GET' 
        action='' 
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className='pasman__field' htmlFor="name">
          Name
          <div ref={inputNameWrapper} className="input-wrapper input-wrapper--name">
            <input 
              id="name"
              value={name}
              onChange={(e) => handleNameInput(e.target.value)} 
              onFocus={() => addFocus(inputNameWrapper)}
              onBlur={() => removeFocus(inputNameWrapper)}           
            />
          </div>
        </label>
        <label className='pasman__field' htmlFor="password">
          Password
          <div ref={inputPasswordWrapper} className="input-wrapper input-wrapper--name">
            <input 
              id="password"
              type="password"
              value={password} 
              onChange={(e) => handleTextInput(e.target.value)}
              onFocus={() => addFocus(inputPasswordWrapper)}
              onBlur={() => removeFocus(inputPasswordWrapper)}
            />
          </div>
        </label>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </InputFieldContainer>
  );
}

export default InputField;