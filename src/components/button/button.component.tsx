import { Spinner } from "native-base";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isFirstStyle = true,
  disabled,
  text,
  textColor,
  loading,
  textSize,
  textBold,
  rightIcon,
  leftIcon,
  ...rest
}) => {
  const backgroundColor = isFirstStyle ? "bg-gray-700" : "bg-orange-100";
  
  const background = disabled ? "bg-gray-100" : backgroundColor
  
  const textButtonColor = textColor ? textColor : "text-black";
  const textSizeStyle = textSize ? textSize : "text-lg";
  const textBoldStyle = textBold ? textBold : "font-bold";

  return (
    <TouchableOpacity
      {...rest}
      className={
        className
          ? className
          : `${background} w-full h-16 rounded-[82px] flex items-center justify-center text-center`
      }
      disabled={disabled || loading}
    >
      {children ? (
        children
      ) : (
        <View
          className='flex flex-row items-center justify-center gap-1'
        >
          {leftIcon && leftIcon}
          <Text className={`${textSizeStyle} ${textButtonColor} ${textBoldStyle}`}>
            {loading ? (
              <Spinner color="white" size="sm" className="pt-1" />
            ) : (
              text
            )}
          </Text>
          {rightIcon && rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
