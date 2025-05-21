import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Toast } from "toastify-react-native";

import { RootState } from "@/redux/store";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/requests/auth";
import { useSelector } from "react-redux";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./user.constants";

export const useUser = () => {
  const user = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const createUser = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: () => {
      Toast.error(ERROR_MESSAGE)
    },
    onSuccess: () => {
     Toast.success(SUCCESS_MESSAGE)
    },
  });

  const onSubmit = (data: RegisterRequestProps) => {
    const isAdmin = data.email.split('.')[0] === 'prof';

    const updatedData = {
      ...data,
      isAdmin: isAdmin
    }

    createUser.mutate(updatedData);
  };

  const isLoading = createUser.isPending;

  return {
    states: {
      user,
      isLoading,
      showPassword,
    },
    actions: {
      onSubmit,
      handleShowPassword,
    },
  };
};