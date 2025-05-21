export type UserRequestProps = {
  id: string;
}

export type UserResponseProps = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type UpdateUserProps = {
  id: string;
  data: {
    name: string;
    email: string;
  }
}