import HeaderContainer from './styledComponents';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { removeUser } from '../../store/userSlice';
import { removePassword } from '../../store/passwordSlice';

function Header(): JSX.Element {
  const passwords = useAppSelector((state) => state.passwords.list);
  const email = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <span>{email}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(removeUser());
          passwords && passwords.map((pass) => (
            dispatch(removePassword({ passID: pass.id }))
          ));
        }}
      >
        Log out
      </button>
    </HeaderContainer>
  );
}

export default Header;
