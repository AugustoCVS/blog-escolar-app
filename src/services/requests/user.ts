import { api } from "../api";
import { UpdateUserProps, UserRequestProps, UserResponseProps } from "../interfaces/user";

export const UserService = {
  getUser: async ({ id }: UserRequestProps) => {
    const res = await api.get<UserResponseProps>(`/user/find/${id}`);

    return res.data;
  },

  listAllUsers: async () => {
    const res = await api.get<UserResponseProps[]>('/user/list');

    return res.data;
  },

  updateUser: async ({ id, data }: UpdateUserProps) => {
    const res = await api.put<UserResponseProps>(`/user/${id}`, data);

    return res.data;
  },

  deleteUser: async ({ id }: UserRequestProps) => {
    const res = await api.delete<UserResponseProps>(`/user/${id}`);

    return res.data;
  }
}