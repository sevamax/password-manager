export type Password = {
  id: string;
  name: string;
  text: string;
  isEditing: boolean;
}

export type PasswordsState = {
  list: Password[];
}

export type RemovePassword = {
  id: string,
}

export type AddPassword = {
  name: string,
  text: string,
}

export type ChangeIsEdit = {
  id: string,
  tempPass?: string,
}

export type EditPass = {
  id: string,
  newText: string,
}

export type UserState = {
  id: string | null,
  token: string | null,
  email: string | null,
}