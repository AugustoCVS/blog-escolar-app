import { Modal } from "@/components/modals/Gerenic/generic-modal.component";
import { Text, View } from "react-native";
import { useModalLogin } from "./modal-login.hook";
import { ModalLoginProps } from "./model-login.types";

export const ModalLogin: React.FC<ModalLoginProps> = ({
  modalRef
}) => {
  const { actions } = useModalLogin({ modalRef });

  return (
    <Modal
      modalizeRef={modalRef}
      handleClose={actions.handleCloseModalLogin}
      title="Entrar"
    >
      <View>
        <Text>Moda login</Text>
      </View>
    </Modal>
  )
} 