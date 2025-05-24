export interface Auth {
  email: string;
  password: string;
}

export const AuthInitialState = { 
  email: '',
  password: '',
}