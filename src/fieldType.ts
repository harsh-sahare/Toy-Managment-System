export default interface userLoginCredentials {
  email: string;
  password: string;
}

export interface userCredentials {
  uiid: string;
  email: string;
  directory?: object[];
}

export interface toyDetails {
  name: string;
}
