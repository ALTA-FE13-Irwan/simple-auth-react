export interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  image: any;
}

export interface UserEdit extends UserType {
  password: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  first_name: string;
  last_name: string;
}
