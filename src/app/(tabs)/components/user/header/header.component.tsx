import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Button } from '@/components/button/button.component';
import { Text, View } from "react-native";
import { useHeader } from './header.hook';
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({name, createPost, createUser}) => {
  const { actions } = useHeader();

  return (
    <View
      className="w-full flex flex-col items-start justify-center h-52 bg-gray-700 pt-10 px-4"
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

      <View
        className='w-full flex flex-row items-center gap-4 mt-4 pr-4'
      >
        <Button 
          text='Criar Usuário'
          onPress={createUser}
          className='w-2/4 p-2 bg-orange-100 h-14 mt-2 flex items-center justify-center rounded-xl'
          textColor='text-white-100'
        />

        <Button 
          text='Criar Post'
          onPress={createPost}
          className='w-2/4 p-2 bg-white-100 h-14 mt-2 flex items-center justify-center rounded-xl'
        />
      </View>
    </View>
  )
}