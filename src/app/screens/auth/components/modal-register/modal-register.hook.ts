import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Toast } from "toastify-react-native";

import { RegisterRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/requests/auth";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-register.constants";
import { ModalRegisterProps } from "./modal-register.types";

export const useModalRegister = ({ modalRef, resetField }: ModalRegisterProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleCloseModalRegister = (): void => {
    modalRef.current?.close();
  }

  const handleRegister = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register(data),
    onError: (err) => {
      Toast.error(ERROR_MESSAGE)
    },
    onSuccess: () => {
     Toast.success(SUCCESS_MESSAGE)
      handleCloseModalRegister();
      resetField('name')
      resetField('email')
      resetField('password')
      resetField('confirm_password')
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
      isLoading,
      showPassword,
    },
    actions: {
      onSubmit,
      handleShowPassword,
      handleCloseModalRegister
    },
  };
};