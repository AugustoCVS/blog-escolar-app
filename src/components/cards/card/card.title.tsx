import React from "react";
import { Text } from "react-native";

export const Title: React.FC<{
  title: string;
  textColor?: string;
  shouldHavePadding?: boolean
  size?: string
  fontFamily?: string
}> = ({ 
  title, 
  textColor, 
  shouldHavePadding = true,
  size = 'text-base',
  fontFamily = 'font-semibold'
}) => {
  const textStyle = textColor ? textColor : 'text-black'
  const padding = shouldHavePadding ? 'py-2' : ''

  return (
    <Text
      className={`${textStyle} ${fontFamily} ${padding} shrink ${size}`}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {title}
    </Text>
  );
}