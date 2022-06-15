import HeaderContainer from "./styledComponents";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { removeUser } from "../../store/userSlice";
import { removePassword } from "../../store/passwordSlice";

const
 Header = (): JSX.Element => {
  const passwords = useAppSelector(state => state.passwords.list);
  const email = useAppSelector(state => state.user.email);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <span>{email}</span>
      <button
        onClick={() => { 
          dispatch(removeUser())
          passwords.map((pass) => {
            dispatch(removePassword(pass));
          })
        }}
      >
        Log out
      </button>
    </HeaderContainer>
  );
}

export default Header;