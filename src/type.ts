export type Password = {
  id: string;
  name: string;
  password: string;
  isEditing: boolean;
}

export type PasswordsState = {
  list: Password[];
  status: string | null;
  error: string | null;
}

export type RemovePassword = {
  id: string;
}

export type AddPassword = {
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
  id: string | null;
  token: string | null;
  email: string | null;
}