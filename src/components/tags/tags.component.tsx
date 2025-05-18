import { TouchableOpacity, Text } from "react-native"
import { ITags } from "./tags.types"

export const Tags: React.FC<ITags> = ({
  name, 
  action, 
  isSelected,
  bgColor,
  border,
  textColor,
  bold
}) => {
  const backgroundColor = bgColor ? bgColor : isSelected ? "bg-orange-100" : "bg-transparent"
  const textColorStyle = textColor ? textColor : isSelected ? "text-white-100" : "text-gray-600"
  const shadow = isSelected ? "shadow-md shadow-orange-100" : ""
  const borderStyle = border ? border : isSelected ? "" : "border-[1px] border-gray-300"
  const boldStyle = bold ? bold : 'font-semibold'

  return (
    <TouchableOpacity
      className={`${backgroundColor} ${shadow} ${borderStyle} rounded-[100px] px-[12px] py-[8px]`}
      onPress={action}
    > 
      <Text
        className={`${textColorStyle} ${boldStyle} text-[12px]`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}