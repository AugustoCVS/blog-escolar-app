import { TouchableOpacity, View } from "react-native";
import { IRoot } from "./card.types";

export const Root: React.FC<IRoot> = ({ 
  children, 
  maxWidth,
  minHeight,
  maxHeight,
  shouldHaveItensCentered = false,
  testID = 'card-root', 
  onPress 
}) => {
  const maxWidthStyle = maxWidth ? `max-w-[${maxWidth}px]` : ''
  const isItensCentered = shouldHaveItensCentered ? 'items-center' : ''

  return (
    <TouchableOpacity
      className={`bg-white-100 rounded-lg p-4 mb-4 flex flex-col ${isItensCentered} ${maxWidthStyle}`}
      testID={testID}
      onPress={onPress}
      style={{ 
        alignSelf: 'flex-start',
        minHeight: minHeight,
        maxHeight: maxHeight
      }} 
    >
      {children}
    </TouchableOpacity>
  )
}