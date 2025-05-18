import { TouchableOpacity, View, Text } from "react-native";
import { Card } from "../cards/card";

export const SectionTitle: React.FC<{
  title: string;
  secondaryTitle?: string;
  action?: () => void;
}> = ({ title, secondaryTitle, action }) => {
  return (
    <View
      className="flex-row justify-between items-center"
    >
      <Card.Title 
        title={title}
      />

      {secondaryTitle && (
        <TouchableOpacity
         onPress={action}
       >
         <Text
           className="text-orange-100 font-semibold"
         >
           {secondaryTitle}
         </Text>
       </TouchableOpacity>
      )}
    </View>
  );
};