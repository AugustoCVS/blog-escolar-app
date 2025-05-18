import { View, Image as ImageComponent, ImageSourcePropType } from "react-native"

import { IImage } from "./card.types"

export const Image: React.FC<IImage> = ({
  testID = "card-image",
  source,
  alt,
  children
}) => {
  return (
    <View
      className="relative w-full"
      testID={testID}
    >
      {children}

      <ImageComponent 
        source={source as ImageSourcePropType}
        alt={alt}
        className="rounded-lg"
      />
    </View>
  )
}