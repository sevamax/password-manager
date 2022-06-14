import { useAppSelector } from '../../hock';
import PasswordItem from '../PasswordItem';
import { PasswordsListContainer } from './styledComponent/PasswordsListContainer';

const PasswordsList = () => {
  const passwords = useAppSelector(state => state.passwords.list);

  return (
    <PasswordsListContainer>
      <h2>{passwords.length} devices/accounts</h2>
      <ul className='password-list'>
        {
          passwords.map((password) => (
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