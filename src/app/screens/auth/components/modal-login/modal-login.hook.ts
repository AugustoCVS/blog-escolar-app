import { setUser } from "@/redux/slices/User/user.slice";
import { LoginRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/requests/auth";
import { saveTokensOnStorage } from "@/utils/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useToast } from "native-base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalLoginProps } from "./model-login.types";

export const useModalLogin = ({ modalRef }: ModalLoginProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const[showPassword, setShowPassword] = useState(false);
  
  const handleCloseModalLogin = (): void => {
    modalRef.current?.close();
  }

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  }

  const navigateToHome = () => {
    handleCloseModalLogin();
    router.push("/(tabs)/index");
  }

  const handleLogin = useMutation({
    mutationFn: async (data: LoginRequestProps) =>
      AuthService.login({
        email: data.email,
        password: data.password,
      }),
    onError: (err) => {
      console.log("err", err);
    },
    onSuccess: async (res) => {
      await saveTokensOnStorage(res.id);
      navigateToHome();
      dispatch(setUser(res));
    },
  });

  const onSubmit = (data: LoginRequestProps) => {
    handleLogin.mutate(data);
  }

  const isLoading = handleLogin.isPending;

  return {
    states: {
      showPassword,
      isLoading,
    },
    actions: {
      handleCloseModalLogin,
      handleShowPassword,
      onSubmit,
    }
  }
}