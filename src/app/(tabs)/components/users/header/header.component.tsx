import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Button } from '@/components/button/button.component';
import { Text, View } from "react-native";
import { useHeader } from './header.hook';
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({name, createUser}) => {
  const { actions } = useHeader();

  return (
    <View
      className="w-full flex flex-col items-start justify-center h-52 bg-gray-700 pt-10 px-4 gap-4"
    >
      <View
        className='flex flex-row items-center justify-between w-full'
      >
        <Text
          className="text-2xl font-bold text-white-100"
        >
          Bem vindo, {name}!
        </Text>

        <MaterialIcons name="logout" size={24} color="white" onPress={actions.handleLogout} />
      </View>

      <Button 
        text='Criar Usuário'
        onPress={createUser}
        className='w-full p-2 bg-orange-100 h-14 mt-2 flex items-center justify-center rounded-xl'
        textColor='text-white-100'
      />
    </View>
  )
}