import { View, Text, TouchableOpacity } from "react-native";
import { IRoot } from "./cta.types";

export const Root: React.FC<IRoot> = ({
  children,
  isCoupon,
  discount,
  onPress,
  height,
  bgColor,
  border,
  width,
  borderRadius
}) => {
  const ctaHeight = height ? height : isCoupon ? 'h-[116px]' : 'h-[102px]';
  const background = bgColor ? bgColor : isCoupon ? 'bg-orange-100' : 'bg-white-100';
  const borderStyle = border ? border : isCoupon ? 'border-r-2 border-dotted border-white-100' : '';
  const ctaWidth = width ? width : isCoupon ? 'w-[80%]' : 'w-full';
  const radius = borderRadius ? borderRadius : 'rounded-[10px]';

  return (
    <TouchableOpacity 
      className="flex flex-row"
      onPress={onPress}
    >
      <View
        className={`flex flex-row items-center ${ctaWidth} ${background} ${borderStyle} ${ctaHeight} ${radius} p-4 px-6 gap-5`}
      >
        {children}
      </View>

      {isCoupon && (
        <View
          className="bg-orange-100 items-center justify-center rounded-[10px] w-[20%]"
        >
          <Text className="text-white-100 font-slackey -rotate-90 leading-none">
            -{discount}% off
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};