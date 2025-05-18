import { View, Image, ImageSourcePropType } from "react-native";
import { IIconImage } from "./icon-image.types";

export const IconImage: React.FC<IIconImage> = ({
  source,
  size = 24,
  roundedStyle = "rounded-full",
  alt = "Icon Image",
}) => {
  return (
    <View>
      <Image 
        source={source as ImageSourcePropType}
        className={`${roundedStyle}`}
        style={{ width: size, height: size }}
        accessibilityLabel={alt}
        alt={alt}
      />
    </View>
  );
}