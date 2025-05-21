import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Toast } from "toastify-react-native";

import { RootState } from "@/redux/store";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/requests/auth";
import { UserService } from "@/services/requests/user";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { EDIT_ERROR_MESSAGE, EDIT_SUCCESS_MESSAGE, ERROR_MESSAGE, SUCCESS_MESSAGE } from "./user.constants";

export const useUser = ({userId}: {userId: string}) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleStartEdit = () => {
    setEdit(true)
  }

  const cancelEdit = () => {
    setEdit(false)
  }

  const handleGoToUserList = () => {
    router.push('/(tabs)/users')
  }

  const getUserById = useQuery({
    queryKey: ["userById", userId],
    queryFn: async () => {
      return await UserService.getUser({ id: userId });
    },
    enabled: userId !== 'criar',
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const createUser = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: () => {
      Toast.error(ERROR_MESSAGE)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] });
      queryClient.invalidateQueries({ queryKey: ['userById'] });

      Toast.success(SUCCESS_MESSAGE)
      handleGoToUserList()
    },
  });

  const updateUser = useMutation({
    mutationFn: (data: RegisterRequestProps) => UserService.updateUser({ id: userId, data }),
    onError: () => {
      Toast.error(EDIT_ERROR_MESSAGE)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] });
      queryClient.invalidateQueries({ queryKey: ['userById'] });

      Toast.success(EDIT_SUCCESS_MESSAGE)
    },
  });

  const deleteUser = useMutation({
    mutationFn: async (id: string) => {
      return await UserService.deleteUser({ id });
    },
    onSuccess: () => {
      Toast.success("Usuário deletado com sucesso!");
      
      queryClient.invalidateQueries({ queryKey: ['userList'] });
      handleGoToUserList()
    },
    onError: () => {
      Toast.error("Erro ao deletar usuário");
    },
  })

  const handleDeleteUser = (id: string) => {
    deleteUser.mutate(id);
  }

  const onSubmit = (data: RegisterRequestProps) => {
    const isAdmin = data.email.split('.')[0] === 'prof';

    const updatedData = {
      ...data,
      isAdmin: isAdmin
    }

    if(userId === 'criar') {
      return createUser.mutate(updatedData);
    }

    if(edit) {
      return updateUser.mutate(updatedData);
    }
  };

  const userInfo = getUserById.data
  const isLoading = getUserById.isLoading
  const isLoadingDeleteUser = deleteUser.isPending
  const isLoadingCreateUser = createUser.isPending
  const isLoadingUpdateUser = updateUser.isPending


  return {
    states: {
      edit,
      user,
      userInfo,
      isLoading,
      showPassword,
      isLoadingDeleteUser,
      isLoadingCreateUser,
      isLoadingUpdateUser,
    },
    actions: {
      onSubmit,
      cancelEdit,
      handleStartEdit,
      handleDeleteUser,
      handleShowPassword,
    },
  };
};