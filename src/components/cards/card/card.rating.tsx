import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text } from "react-native";

export const Rating: React.FC<{
  rating: number;
  maxRating: number;
  children?: React.ReactNode;
}> = ({ rating, children, maxRating }) => {
  return (
    <View
      className="flex-row items-center justify-start"
    >
      {
        [...Array(maxRating)].map((_, index) => {
          const isFilled = index < rating;
          return (
            <AntDesign
              key={index}
              name={isFilled ? "star" : "staro"}
              size={12}
              color={isFilled ? "#FFB800" : "#D1D5DB"}
              style={{ marginRight: 4 }}
            />
          );
        })
      }

      {children}
    </View>
  )
}