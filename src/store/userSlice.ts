import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../type';

const initialState: UserState = {
  id: '',
  token: '',
  email: '',
};

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
      state.id = '';
      state.email = '';
      state.token = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
