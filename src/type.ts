export type Password = {
  id: string;
  name: string;
  password: string;
  isEditing: boolean;
}

export type PasswordsState = {
  list: Password[];
  status: string | null;
}

export type RemovePassword = {
  passID: string;
}

export type AddPassword = {
  id: string;
  name: string;
  password: string;
}

export type ChangeIsEdit = {
  id: string;
  tempPass?: string;
}

export type EditPass = {
  id: string;
  newText: string;
}

export type UserState = {
  id: string;
  token: string;
  email: string;
}

export type PassItem = {
  userId: string;
  name: string;
  password: string;
}