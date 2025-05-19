import AntDesign from '@expo/vector-icons/AntDesign';

import { Input } from "@/components/inputs/input/input.component";
import { Text, View } from "react-native";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({name, value, setValue}) => {
  return (
    <View
      className="w-full flex flex-col items-start justify-center h-52 bg-gray-700 pt-10 px-4"
    >
      <Text
        className="text-2xl font-bold text-white-100"
      >
        Bem vindo, {name}!
      </Text>

      <Input 
        placeholder="Pesquisar"
        onChangeText={setValue}
        value={value}
        icon={<AntDesign name="search1" size={16} color="white" />}
      />
    </View>
  )
}