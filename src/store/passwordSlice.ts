import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PasswordsState, RemovePassword, ChangeIsEdit, EditPass, AddPassword }  from '../type';
import { db } from '../firebase';
import { collection, getDocs  } from "firebase/firestore"; 


export const fetchPasswords: any = createAsyncThunk(
  'passwords/fetchPasswords',
  async function(userId: string) {
    if (userId) {
      const responce = await getDocs(collection(db, userId));
      let passwordList: any[] = [];
      responce.forEach((doc) => {
        passwordList.push({id: doc.id, ...doc.data()});
      });
      return passwordList;
    }
  })

const initialState: PasswordsState = {
  list: [],
  status: null,
  error: null,
}

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    addPassword(state, action: PayloadAction<AddPassword>) {
      const {password, name} = action.payload;
      if(name.trim() && password.trim()) {
        state.list.push({
          id: new Date().toISOString(),
          name,
          password,
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
        changedIsEditPassword.password = action.payload.tempPass;
      }
    },
    editPass(state, action: PayloadAction<EditPass>) {
      const {id, newText} = action.payload;
      const editedText = state.list.find(password => password.id === id);

      if (editedText) {
        editedText.password = newText;
      }
    },
  },
  extraReducers: {
    [fetchPasswords.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPasswords.fulfilled]: (state, action) => {
      state.status = 'resolved';
      if(action.payload) {
        state.list = action.payload;
      }

    },
    [fetchPasswords.rejecred]: (state, action) => {
      state.status = 'rejecred';
      // state.list = action.payload;
    }
  }
});

export const {addPassword, removePassword, changeIsEdit, editPass } = passwordSlice.actions;

export default passwordSlice.reducer;