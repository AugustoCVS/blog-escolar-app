import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useAuth = () => {
  const modalLogin = useRef<Modalize>(null);
  const modalRegister = useRef<Modalize>(null);

  const handleOpenModalLogin = (): void => {
    modalLogin.current?.open();
  }

  const handleOpenModalRegister = (): void => {
    modalRegister.current?.open();
  }

  return {
    refs: {
      modalLogin,
      modalRegister
    },
    actions: {
      handleOpenModalLogin,
      handleOpenModalRegister
    }
  }

}