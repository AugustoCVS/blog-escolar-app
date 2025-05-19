import { TouchableOpacity, View } from "react-native";
import { IRoot } from "./cta.types";

export const Root: React.FC<IRoot> = ({
  children,
  discount,
  onPress,
  height,
  bgColor,
  border,
  width,
  borderRadius
}) => {
  const ctaHeight = height ? height : 'h-[102px]';
  const background = bgColor ? bgColor : 'bg-white-100';
  const borderStyle = border ? border : '';
  const ctaWidth = width ? width : 'w-full';
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
    </TouchableOpacity>
  );
};