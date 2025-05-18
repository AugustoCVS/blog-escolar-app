import React from "react";
import { ICardImage } from "./card-image.types";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

export const CardImage: React.FC<ICardImage> = ({ 
  name,
  color,
  image,
  action,
}) => {
  const backgroundColor = color || "bg-white-100";

  return (
    <TouchableOpacity
      className="flex flex-col items-center gap-1 overflow-visible"
    >
      <View
        className={`${backgroundColor} w-[110px] h-[108px] rounded-[10px] flex items-center justify-center pb-8`}
      >
        <Image 
          source={image as ImageSourcePropType}
        />
      </View>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}