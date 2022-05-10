export interface IAuthenticationData {
  email: string;
  password: string;
}

export interface IRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string | number;
}

export interface IUser {
  id: string | number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string | number;
}

export interface IWord {
  id: string | number;
  set: string | number;
  user: string | number;
  originalWord: string;
  translationWord: string;
  stateWord: "new" | "learning" | "learned";
}

export interface ISet {
  id: string;
  permanent: boolean;
  title: string;
  user: "admin" | string | number;
}
