import { View, Image as ImageComponent, ImageSourcePropType } from "react-native";
import { IImage } from "./card.types";

export const ImageInfluencers: React.FC<IImage> = ({
  testID = "card-image",
  source,
  alt,
  className = "",
  bgColor
}) => {
  return (
    <View
      testID={testID}
      className={`relative w-[175px] h-[175px] rounded-full overflow-hidden ${className}`}
    >
      <View className={`absolute top-0 left-0 w-full h-2/5 ${bgColor}`} />

      <ImageComponent 
        source={source as ImageSourcePropType}
        alt={alt}
        className="w-full h-full"
      />
    </View>
  );
};