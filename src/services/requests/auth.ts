
import { api } from "../api";
import {
  LoginRequestProps,
  LoginResponseProps,
  RegisterRequestProps,
} from "../interfaces/auth";

export const AuthService = {
  register: async (user: RegisterRequestProps) => {

    const res = await api.post("/user/register", user);

    return res.data;
  },

  login: async ({ email, password }: LoginRequestProps) => {
    const res = await api.post<LoginResponseProps>("/user/login", {
      email,
      password,
    });

    return res.data;
  },
};
