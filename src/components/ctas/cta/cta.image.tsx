import { View, Image as ImageComponent, ImageSourcePropType } from "react-native"

import { IImage } from "./cta.types"

export const Image: React.FC<IImage> = ({
  source,
  bgColor,
  alt,
  maxHeight = 56,
  maxWidth = 56,
}) => {

  return (
    <View
      className={`w-[${maxWidth}px] h-[${maxHeight}px] ${bgColor} rounded flex items-center justify-center`}
    >
      <ImageComponent 
        source={source as ImageSourcePropType}
        alt={alt}
        className="rounded-lg"
        style={{
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          borderRadius: 8,
        }}
      />
    </View>
  )
}