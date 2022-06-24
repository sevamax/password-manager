import useAppSelector from './useAppSelector';

function useAuth() {
  const { id, email, token } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export default useAuth;
