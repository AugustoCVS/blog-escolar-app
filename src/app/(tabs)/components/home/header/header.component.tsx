import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Button } from '@/components/button/button.component';
import { Input } from "@/components/inputs/input/input.component";
import { colors } from '@/styles/colors';
import { Text, View } from "react-native";
import { useHeader } from './header.hook';
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({name, value, setValue, createPost}) => {
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
        <Input 
          placeholder="Pesquisar"
          onChangeText={setValue}
          value={value}
          icon={<AntDesign name="search1" size={18} color={colors.gray[700]} />}
          secondInput
          width='w-3/4'
        />

        <Button 
          text='Criar'
          onPress={createPost}
          className='w-1/4 p-2 bg-white-100 h-14 mt-2 flex items-center justify-center rounded-xl'
        />
      </View>
    </View>
  )
}