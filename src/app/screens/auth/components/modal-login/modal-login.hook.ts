import { ModalLoginProps } from "./model-login.types";

export const useModalLogin = ({ modalRef }: ModalLoginProps) => {
  
  const handleCloseModalLogin = (): void => {
    modalRef.current?.close();
  }

  return {
    actions: {
      handleCloseModalLogin
    }
  }
}