import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/button/button.component";
import { Input } from "@/components/inputs/input/input.component";
import { Modal } from "@/components/modals/Gerenic/generic-modal.component";
import { colors } from "@/styles/colors";
import Octicons from '@expo/vector-icons/Octicons';
import { View } from "react-native";
import { signUpSchema } from "./modal-register.constants";
import { useModalRegister } from "./modal-register.hook";
import { formProps, ModalRegisterProps } from "./modal-register.types";

export const ModalRegister: React.FC<ModalRegisterProps> = ({
  modalRef
}) => {
  const { control, handleSubmit, formState: { errors }, resetField } = useForm<formProps>({ resolver: yupResolver(signUpSchema) });

  const { states, actions } = useModalRegister({ modalRef, resetField });

  return (
    <Modal
      modalizeRef={modalRef}
      handleClose={actions.handleCloseModalRegister}
      title="Entrar"
    >
      <View
        className="w-full flex flex-col gap-4 px-4 mb-8"
      >

        <Controller 
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
          <Input
              label="Nome"
              placeholder="Informe o seu nome"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.name?.message}
              keyboardType="email-address"
            />
          )}
        />

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

        <Controller 
          control={control}
          name="confirm_password"
          render={({ field: { onChange, value } }) => (
          <Input
              label="Confirme sua senha"
              placeholder="Informe sua senha novamente"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.confirm_password?.message}
              keyboardType="default"
              secureTextEntry={!states.showPassword}
              icon={<Octicons name={states.showPassword ? 'eye' : 'eye-closed'} size={16} color={colors.gray[700]} />}
              onPress={actions.handleShowPassword}
            />
          )}
        />

        <Button 
          text="Registrar"
          textColor="text-white-100"
          onPress={handleSubmit(actions.onSubmit)}
          loading={states.isLoading}
        />
      </View>
    </Modal>
  )
} 