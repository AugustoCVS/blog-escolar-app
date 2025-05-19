import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import * as T from "./input.types";

export const Input: React.FC<T.InputProps> = ({
  icon,
  value,
  label,
  isInvalid,
  secondInput = false,
  placeholder,
  keyboardType,
  errorMessage,
  secureTextEntry,
  onChangeText,
  formatter,
  onPress,
}) => {
  const invalid = !!errorMessage || isInvalid;
  const borderColor = invalid ? "border-red-500" : "border-gray-300";
  const backgroundColor = secondInput && "bg-white-100";

  const handleChangeText = (text: string) => {
    if (!!formatter) {
      onChangeText?.(formatter(text)); 
    } else {
      onChangeText?.(text);
    }
  };

  return (
    <View 
      className="flex flex-col mb-4 w-full"
    >
      <View
        className="flex flex-col gap-2"
      >
        <Text className="text-gray-400 font-semibold text-xs">{label}</Text>
        <View
          className="flex items-center justify-center w-full"
        >
          <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={secondInput ? colors.gray[400] : colors.gray[300]}
            value={value}
            onChangeText={handleChangeText}
            secureTextEntry={secureTextEntry}
            className={`h-14 w-full border ${borderColor} rounded-xl pl-4 text-black ${backgroundColor}`}
          />

          <TouchableOpacity className="absolute right-4 top-5" onPress={onPress} >{icon}</TouchableOpacity>
        </View>
      </View>

    {invalid && (
      <Text className="text-red-500 pt-2 text-xs">{errorMessage}</Text>
    )}
    </View>
  ); 
};
