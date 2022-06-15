import { removePassword, changeIsEdit, editPass } from "../store/passwordSlice";
import { useAppDispatch } from '../hock';
import { useState, useRef } from 'react';
import { addFocus, removeFocus } from '../functions/Focus';
import { toggleShowPassword } from '../functions/Password';

interface PasswordItemProps {
  id: string,
  text: string,
  name: string,
  isEditing: boolean,
};

const PasswordItem: React.FC<PasswordItemProps> = ({id, text, name, isEditing}) => {
  const [isPassShow, setIsPassShow] = useState(false);

  const inputPasswordEditorWrapper = useRef<HTMLDivElement | null>(null);
  const inputPasswordEditor = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const tempPass = 'asdasd';

  return (
    <li className="pasman__item">

      <div className="pasman__text">
        <span className="pasman__name">{name}</span>
      </div>

      <div className="pasman__passwrapper">
        {
            isEditing 
              ? (
                <div ref={inputPasswordEditorWrapper} className="input-wrapper input-wrapper--password">
                  <input 
                    className='pasman__password' 
                    value={text}
                    ref={inputPasswordEditor}
                    onChange={(e) => dispatch(editPass({id, newText: e.target.value}))}
                    onFocus={() => addFocus(inputPasswordEditorWrapper)}
                    onBlur={() => removeFocus(inputPasswordEditorWrapper)}   
                  />
                </div>
                )
              : (
                <div className="input-wrapper input-wrapper--password">
                  <input 
                    className='pasman__password' 
                    value={text} 
                    type={toggleShowPassword(isPassShow)} 
                    disabled
                  />
                  <button className="btn-show-password" onClick={() => setIsPassShow(!isPassShow)}>
                    {
                      !isPassShow
                        ? (<svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 7c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7.2c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7c0 1.49-1.21 2.7-2.7 2.7z"></path><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13a9.77 9.77 0 0 1-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17z"></path></svg>) 
                        : (<svg width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M10.58 7.25l1.56 1.56c1.38.07 2.47 1.17 2.54 2.54l1.56 1.56c.16-.44.26-.91.26-1.41C16.5 9.02 14.48 7 12 7c-.5 0-.97.1-1.42.25z"></path><path d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.762 9.762 0 0 1-2.66 3.33l1.42 1.42c1.51-1.26 2.7-2.89 3.43-4.74C21.27 7.11 17 4 12 4c-1.4 0-2.73.25-3.98.7l1.61 1.6C10.4 6.12 11.19 6 12 6zm4.43 9.93l-1.25-1.25-1.27-1.27-3.82-3.82-1.27-1.27-1.25-1.25-1.48-1.48-2.78-2.78-1.42 1.41 2.53 2.53A11.96 11.96 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.4 0 2.73-.25 3.98-.7l4.3 4.3 1.41-1.41-3.78-3.78-1.48-1.48zm-4.57-1.74a2.677 2.677 0 0 1-2.54-2.54l2.54 2.54zM12 17a9.77 9.77 0 0 1-8.82-5.5 9.762 9.762 0 0 1 2.66-3.33l1.91 1.91c-.15.45-.25.92-.25 1.42 0 2.48 2.02 4.5 4.5 4.5.5 0 .97-.1 1.42-.25l.95.95c-.77.18-1.56.3-2.37.3z"></path></svg>)
                    }
                  </button>
                </div>
                )
        }
      </div>

      <div className="btns">
        {
          isEditing 
            ?  (
                <>
                  <button style={{color: 'green'}} onClick={() => dispatch(changeIsEdit({id}))}>&#43;</button>
                  <button style={{color: 'red'}} onClick={() => dispatch(changeIsEdit({id, tempPass}))}>&times;</button>
                </>
              )
            :  (
                <>
                  <button onClick={() => {navigator.clipboard.writeText(text)}}>
                    <svg height="18" viewBox="0 0 24 24" width="18" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"></path></g></svg>
                  </button>
                  <button
                    style={{color: 'blue'}}
                    onClick={() => {
                      dispatch(changeIsEdit({id}));
                      setTimeout(() => {
                        if(inputPasswordEditor.current) {
                          inputPasswordEditor.current.focus();
                        }
                      }, 0)
                   }}
                  >
                    Edit
                  </button>
                  <button style={{color: 'red'}} onClick={() => dispatch(removePassword({id}))}>&times;</button>
                </>
              )
        }
      </div>
    </li>
  );
}

export default PasswordItem;