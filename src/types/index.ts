export interface IUserAuthenticationData {
  email: string;
  password: string;
}

export interface IUserRegistrationData extends IUserAuthenticationData {
  firstName: string;
  lastName: string;
}
