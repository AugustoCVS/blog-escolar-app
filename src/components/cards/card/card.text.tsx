import {Text as NativeText, View} from 'react-native';
import { ITextComponent } from './card.types';

export const TextComponent: React.FC<ITextComponent> = ({ 
    text, 
    textSize = 'text-xs',
    textColor = '',
    highlightedText,
    isHighlightedTextBold = false,
    highlightedTextColor = 'text-orange-100',
    testID,
    isDarkText = false,
    children, 
    textWidth,
    bold,
  }) => {
  const textStyle = bold ? bold : isDarkText ? 'font-semibold' : '';
  const color = textColor ? textColor : 'text-gray-700';
  const highlightedTextStyle = isHighlightedTextBold ? 'font-bold' : '';

  return (
    <View 
      className='flex flex-row items-center justify-start'
      testID={testID}
    >

      {children}

      {text && (
        <NativeText 
          className={`${textStyle} ${textSize} ${color} ${textWidth}`}
          ellipsizeMode="tail"
        >
          {text}
        </NativeText>
      )}

      {highlightedText && (
        <NativeText 
          className={`${textSize} ${highlightedTextColor} ml-1 ${highlightedTextStyle}`}
        >
          {highlightedText}
        </NativeText>
      )}
    </View>
  )
}