import { View, Text } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { ITag } from "./card.types";

export const Tag: React.FC<ITag> = ({
  children,
  text,
  shouldBeFixed = true,
  tagBackground,
  shouldHaveBorder = true,
  backgroundTagSize,
  shouldRenderTag,
  testID
}) => {
  const fixedStyle = shouldBeFixed ? 'absolute top-2 left-2 z-10' : ''
  const tagBackgroundStyle = tagBackground ? tagBackground : (shouldRenderTag ? 'bg-orange-200' : '')
  const borderStyle = shouldHaveBorder ? 'border border-orange-100' : ''

  return (
    <View className={` ${fixedStyle} ${borderStyle} flex-row gap-1 items-center rounded-md p-1`}>
      <View
        className={`${tagBackgroundStyle} rounded-full flex items-center justify-center`}
        style={{
          width: backgroundTagSize,
          height: backgroundTagSize,
        }}
      >
        {children ? 
          children 
        : (
          shouldRenderTag && (
            <AntDesign 
              name="star" 
              size={8} 
              color="white-100" 
            />
          )
        )}
      </View>

      {text && (
        <Text
          className="text-white-100 font-semibold text-[10px]"
        >
          {text}
        </Text>
      )}
    </View>
    )
}