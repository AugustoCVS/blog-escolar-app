import { colors } from '@/styles/colors';
import Entypo from '@expo/vector-icons/Entypo';
import { Text, View } from "react-native";

export const EmptyScreen: React.FC<{message: string}> = ({ message }) => {
  return (
    <View
      className="flex h-screen items-center justify-center gap-4 pb-20"
    >
      <Entypo name="emoji-sad" size={60} color={colors.gray[400]} />
      <Text className="text-center text-lg font-bold text-gray-400">
        {message}
      </Text>
    </View>
  );
}
