import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Text, View } from "react-native";
import { useHeader } from './header.hook';
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({name}) => {
  const { actions } = useHeader();

  return (
    <View
      className="w-full flex flex-col items-start justify-center h-32 bg-gray-700 pt-10 px-4"
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
    </View>
  )
}