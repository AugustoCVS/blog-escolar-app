import { View } from "react-native"
import { IDescription } from "./card.types"

export const Description: React.FC<IDescription> = ({
  children, 
  isSpaceBetween = false,
  shouldHaveItensCentered = false,
  isRow = false,
  testID,
  marginTop = 0,
  gap = 'gap-2',
}) => {
  const marginStyle = marginTop ? `mt-${marginTop}` : ''
  const descriptionStyle = isSpaceBetween ? 'flex flex-row items-center justify-between' 
      : isRow ? `flex flex-row items-center ${gap}` : `flex flex-col ${gap}`

  const centerStyle = shouldHaveItensCentered ? 'items-center' : ''

  return (
    <View className={` ${descriptionStyle} ${marginStyle} ${centerStyle} flex-wrap`} testID={testID}>
      {children}
    </View>
  )
}