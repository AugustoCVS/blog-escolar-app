import Octicons from '@expo/vector-icons/Octicons';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import { EmptyScreen } from '@/components/empty-screen/empty-screen.component';
import { Input } from "@/components/inputs/input/input.component";
import { colors } from '@/styles/colors';
import { useLocalSearchParams } from 'expo-router';
import { ButtonSection } from './components/button-section/button-section.component';
import { createUserSchema, editUserSchema } from './user.constants';
import { useUser } from './user.hook';
import { formProps } from './user.types';

export default function User() {
  const { userId } = useLocalSearchParams();

  const { states, actions } = useUser({userId: userId as string});
  const { control, handleSubmit, formState: { errors }, resetField } = useForm<formProps>({ 
    resolver: yupResolver(userId === 'criar' ? createUserSchema : editUserSchema as any),
    values: {
      name: states.userInfo?.name || '',
      email: states.userInfo?.email || '',
      password: '',
      confirm_password: '',
      isAdmin: states.userInfo?.isAdmin || false,
    } 
  });

  if(!states.user && userId !== 'criar') {
    return <EmptyScreen message="Usuário não encontrado. Tente novamente!" />
  }

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
            editable={states.edit || userId === 'criar'}
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
            editable={states.edit || userId === 'criar'}
          />
        )}
      />

    {userId === 'criar' && (
      <View
        className="w-full flex flex-col gap-4"
      >
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
      </View>
    )}

      <ButtonSection 
        isEdit={states.edit}
        userId={userId as string}
        isLoading={states.isLoadingCreateUser || states.isLoadingUpdateUser}
        isDeleting={states.isLoadingDeleteUser}
        resetField={resetField}
        cancelEdit={actions.cancelEdit}
        handleStartEdit={actions.handleStartEdit}
        handleDeleteUser={actions.handleDeleteUser}
        handleSaveUser={handleSubmit(actions.onSubmit)}
      />
    </View>
  )
}