export const toggleShowPassword = (pasState: boolean, password: string) => {
  return pasState 
    ? { 
        type: 'text', 
        password, 
      } 
    : {
        type: 'password',
        password: '•••••••••'
    }
}