import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useAuth = () => {
  const modalLogin = useRef<Modalize>(null);

  const handleOpenModalLogin = (): void => {
    modalLogin.current?.open();
  }

  return {
    refs: {
      modalLogin
    },
    actions: {
      handleOpenModalLogin
    }
  }

}