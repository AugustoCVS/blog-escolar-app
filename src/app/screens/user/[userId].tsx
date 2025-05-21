import Octicons from '@expo/vector-icons/Octicons';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import { Button } from '@/components/button/button.component';
import { Input } from "@/components/inputs/input/input.component";
import { colors } from '@/styles/colors';
import { createUserSchema } from './user.constants';
import { useUser } from './user.hook';
import { formProps } from './user.types';

export default function User() {
  const { states, actions } = useUser();
  const { control, handleSubmit, formState: { errors } } = useForm<formProps>({ resolver: yupResolver(createUserSchema) });

  return (
    <View
      className="w-full flex flex-col gap-4 px-4 mb-8 pt-16"
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
        text="Criar usuário"
        textColor="text-white-100"
        onPress={handleSubmit(actions.onSubmit)}
        loading={states.isLoading}
      />
    </View>
  )
}