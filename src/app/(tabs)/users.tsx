import Octicons from '@expo/vector-icons/Octicons';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import { Button } from '@/components/button/button.component';
import { Input } from "@/components/inputs/input/input.component";
import { colors } from '@/styles/colors';
import { Header } from './components/users/header/header.component';
import { createUserSchema } from "./constants/users.constants";
import { useUsers } from "./hooks/users/users.hook";
import { formProps } from "./types/users.types";

export default function Users() {
  const { states, actions } = useUsers();
  const { control, handleSubmit, formState: { errors } } = useForm<formProps>({ resolver: yupResolver(createUserSchema) });

  return (
    <View>
      <Header name={states.user.name} />

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
    </View>
  )
}