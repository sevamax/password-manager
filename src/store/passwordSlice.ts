import { db } from '../firebase';
import {
  createSlice, 
  PayloadAction, 
  createAsyncThunk, 
  nanoid,
} from '@reduxjs/toolkit';
import { 
  Password, 
  PasswordsState, 
  RemovePassword, 
  ChangeIsEdit, 
  EditPass, 
  PassItem }  from '../type';
import { 
  collection, 
  getDocs, 
  getDoc, 
  deleteDoc, 
  doc, 
  setDoc
} from "firebase/firestore"; 

export const fetchPasswords = createAsyncThunk<Password[], string>(
  'passwords/fetchPasswords',
  async function(userId) {
      const responce = await getDocs(collection(db, userId));
      
      let passwordList: Password[] = [];

      responce.forEach((doc) => {
        const {id, name, password, isEditing} = doc.data();
        passwordList.push({id, name, password, isEditing});
      });

    return passwordList;
  })

  export const deletePassword: any = createAsyncThunk<string, {userID: string, passID: string}>(
    'passwords/deletePassword',
    async function(document) {
      const {userID, passID} = document;

          await deleteDoc(doc(db, userID, passID));

          if (!doc(db, userID, passID)) {
            throw new Error('Can\'t delete task. Some trouble with server.')
          }

          return passID;
        
    })

    export const addNewPassword = createAsyncThunk<Password, PassItem>(
      'passwords/addNewPassword',
      async function(passItem) {
        const {name, password, userId} = passItem;
        const id = nanoid();

        const newPassword = {
          id,
          name,
          password,
          isEditing: false,
        }

        await setDoc(doc(db, userId, id), newPassword);
        let document = await getDoc(doc(db, userId, id));

        return (await document.data()) as Password;
      })

      export const updatePassword = createAsyncThunk<Password, {userID: string, id: string, name: string, password: string}>(
        'passwords/updatePassword',
        async function(document: any) {
          const {userID, id, name, password} = document;

          await setDoc(doc(db, userID, id), {
            id,
            name,
            password,
            isEditing: false,
          });

          return {
            id,
            name,
            password,
            isEditing: false
          } as Password;
        })


const initialState: PasswordsState = {
  list: [],
  status: null,
}

const passwordSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    removePassword(state, action: PayloadAction<RemovePassword>) {
      state.list = state.list.filter(password => password.id !== action.payload.passID)
    },
    changeIsEdit(state, action: PayloadAction<ChangeIsEdit>) {
      const changedIsEditPassword = state.list.find(password => password.id === action.payload.id);

      if (changedIsEditPassword) {
        changedIsEditPassword.isEditing = !changedIsEditPassword.isEditing;
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPasswords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPasswords.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.list = action.payload;
      })
      .addCase(addNewPassword.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deletePassword.fulfilled, (state, action) => {
        state.list = state.list.filter(password => password.id !== action.payload);
      })
  }
});

export const {removePassword, changeIsEdit, editPass } = passwordSlice.actions;

export default passwordSlice.reducer;