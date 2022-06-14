import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PasswordsState, RemovePassword, ChangeIsEdit, EditPass, AddPassword }  from '../type';


const initialState: PasswordsState = {
  list: [],
}

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    addPassword(state, action: PayloadAction<AddPassword>) {
      const {text, name} = action.payload;
      if(name.trim() && name.trim()) {
        state.list.push({
          id: new Date().toISOString(),
          name,
          text,
          isEditing: false,
        })
      }
    },
    removePassword(state, action: PayloadAction<RemovePassword>) {
      state.list = state.list.filter(password => password.id !== action.payload.id)
    },
    changeIsEdit(state, action: PayloadAction<ChangeIsEdit>) {
      const changedIsEditPassword = state.list.find(password => password.id === action.payload.id);

      if (changedIsEditPassword) {
        changedIsEditPassword.isEditing = !changedIsEditPassword.isEditing;
      }
      if (action.payload.tempPass && changedIsEditPassword) {
        changedIsEditPassword.text = action.payload.tempPass;
      }
    },
    editPass(state, action: PayloadAction<EditPass>) {
      const {id, newText} = action.payload;
      const editedText = state.list.find(password => password.id === id);

      if (editedText) {
        editedText.text = newText;
      }
    },
  }
});

export const {addPassword, removePassword, changeIsEdit, editPass} = passwordSlice.actions;

export default passwordSlice.reducer;