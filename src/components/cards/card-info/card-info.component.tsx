import { View } from "react-native";
import { Card } from "../card";
import { ICardInfo } from "./card-info.types";

export const CardInfo: React.FC<ICardInfo> = ({
  firstText,
  secondText,
  firstTextSize = 'text-base',
  secondTextSize = 'text-base',
}) => {
  return (
    <View
      className="w-[103px] h-[71px] py-6 flex items-center justify-center bg-white-100 rounded-[10px] shadow-md"
    >
      <Card.TextComponent
        highlightedText={firstText}
        textSize={firstTextSize}
        isHighlightedTextBold={true}
      />

      <Card.TextComponent
        text={secondText}
        textSize={secondTextSize}
      />
    </View>
  )
}