import useAppSelector from '../../hooks/useAppSelector';
import PasswordItem from '../PasswordItem/PasswordItem';
import { PasswordsListContainer } from './styledComponent/PasswordsListContainer';


const PasswordsList = () => {
  const passwords = useAppSelector(state => state.passwords.list);
  const status = useAppSelector(state => state.passwords.status);
  return (
    <PasswordsListContainer>
      <h2>{passwords.length} devices/accounts</h2>

      {status === 'loading' && (
        <img 
          src="../../../img/cupertino_activity_indicator.gif" 
          className='loader'
          alt="data is loading " 
          width="100" 
          height="100"
        />
      )}
      
      <ul className='password-list'>
        {
          passwords && passwords.map((password) => (
            <PasswordItem 
              key={password.id} 
              {...password} 
            />
          ))
        }
      </ul>
    </PasswordsListContainer>
  )
}

export default PasswordsList;