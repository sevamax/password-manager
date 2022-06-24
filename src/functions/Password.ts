const toggleShowPassword = (pasState: boolean, password: string) => (pasState
  ? {
    type: 'text',
    password,
  }
  : {
    type: 'password',
    password: '•••••••••',
  });

export default toggleShowPassword;
