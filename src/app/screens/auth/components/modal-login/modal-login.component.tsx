import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/button/button.component";
import { Input } from "@/components/inputs/input/input.component";
import { Modal } from "@/components/modals/Gerenic/generic-modal.component";
import { colors } from "@/styles/colors";
import Octicons from '@expo/vector-icons/Octicons';
import { View } from "react-native";
import { signInSchema } from "./modal-login.constants";
import { useModalLogin } from "./modal-login.hook";
import { formProps, ModalLoginProps } from "./model-login.types";

export const ModalLogin: React.FC<ModalLoginProps> = ({
  modalRef
}) => {
  const { states, actions } = useModalLogin({ modalRef });

  const { control, handleSubmit, formState: { errors } } = useForm<formProps>({ resolver: yupResolver(signInSchema) });

  return (
    <Modal
      modalizeRef={modalRef}
      handleClose={actions.handleCloseModalLogin}
      title="Entrar"
    >
      <View
        className="w-full flex flex-col gap-4 px-4 mb-8"
      >
        <Controller 
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
          <Input
              label="Email"
              placeholder="Informe o seu email"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.email?.message}
              keyboardType="email-address"
            />
          )}
        />

        <Controller 
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
          <Input
              label="Senha"
              placeholder="Informe sua senha"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
              keyboardType="default"
              secureTextEntry={!states.showPassword}
              icon={<Octicons name={states.showPassword ? 'eye' : 'eye-closed'} size={16} color={colors.gray[700]} />}
              onPress={actions.handleShowPassword}
            />
          )}
        />

        <Button 
          text="Entrar"
          textColor="text-white-100"
          onPress={handleSubmit(actions.onSubmit)}
          loading={states.isLoading}
        />
      </View>
    </Modal>
  )
} 