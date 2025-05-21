import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Toast } from "toastify-react-native";

import { RootState } from "@/redux/store";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/requests/auth";
import { useSelector } from "react-redux";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants/users.constants";

export const useUsers = () => {
  const user = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };


  const handleRegister = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: (err) => {
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

    handleRegister.mutate(updatedData);
  };

  const isLoading = handleRegister.isPending;

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