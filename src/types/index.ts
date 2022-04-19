export interface IUserAuthenticationData {
  email: string;
  password: string;
}

export interface IUserRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: string | number;
}

export interface IUserData {
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
