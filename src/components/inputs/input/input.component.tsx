import React from "react";
import { Text, TextInput, View } from "react-native";

import * as T from "./input.types";
import { colors } from "@/styles/colors";

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
  formatter
}) => {
  const invalid = !!errorMessage || isInvalid;
  const borderColor = invalid ? "border-red-500" : "border-gray-300";
  const backgroundColor = secondInput && "bg-white-100";
  const padding = !!icon ? "pl-12" : "pl-4";

  const handleChangeText = (text: string) => {
    if (!!formatter) {
      onChangeText?.(formatter(text)); // Aplica a formatação
    } else {
      onChangeText?.(text);
    }
  };

  return (
    <View 
      className="flex flex-col mb-4"
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
            className={`h-14 w-full border ${borderColor} rounded-xl ${padding} text-black ${backgroundColor}`}
          />

          <View className="absolute left-4 top-4">{icon}</View>
        </View>
      </View>

    {invalid && (
      <Text className="text-red-500 pt-2 text-xs">{errorMessage}</Text>
    )}
    </View>
  ); 
};
