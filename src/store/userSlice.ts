import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState }  from '../type';
import { PasswordsState, RemovePassword, ChangeIsEdit, EditPass, AddPassword }  from '../type';


const initialState: UserState = {
  id: null,
  token: null,
  email: null,
  passwords:  {
    list: [],
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;