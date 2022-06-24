import { useState, useRef } from 'react';
import { addFocus, removeFocus } from '../../functions/focus';
import InputFieldContainer from '../InputField/styledComponent/InputFieldContainer';

interface FormProps {
  title: string,
  handleClick: (email: string, password: string) => void,
}

const Form: React.FC<FormProps> = ({ title, handleClick }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmailWrapper = useRef<HTMLDivElement | null>(null);
  const inputPasswordWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <InputFieldContainer className="tempForm">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label className="pasman__field" htmlFor="email">
          Email
          <div ref={inputEmailWrapper} className="input-wrapper input-wrapper--name">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              onFocus={() => addFocus(inputEmailWrapper)}
              onBlur={() => removeFocus(inputEmailWrapper)}
            />
          </div>
        </label>
        <label className="pasman__field" htmlFor="password">
          Password
          <div ref={inputPasswordWrapper} className="input-wrapper input-wrapper--name">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              onFocus={() => addFocus(inputPasswordWrapper)}
              onBlur={() => removeFocus(inputPasswordWrapper)}
            />
          </div>
        </label>
        <button onClick={() => handleClick(email, password)} type="submit">
          {title}
        </button>
      </form>
    </InputFieldContainer>
  );
};

export default Form;
