import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import { colors } from "@/styles/colors";
import { Card } from "../../cards/card";
import { Cta } from "../cta";
import { ICtaPost } from "./cta-post.types";

export const CtaPost: React.FC<ICtaPost> = ({
  title,
  firstDescription,
  secondDescription,
  date,
  onPress
}) => {
  const formatDate = date ? new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }) : null;

  return (
    <Cta.Root
      onPress={onPress}
    >

    <Cta.Description>
      {title && (
        <Card.Title  
          title={title}
          textColor="text-gray-700 text-sm"
          shouldHavePadding={false}
        />
      )}

      <View
        className="flex flex-col"
      >
        {firstDescription && (
          <Card.TextComponent 
            text="Autor: "
            highlightedText={firstDescription}
            isHighlightedTextBold
            highlightedTextColor="text-gray-700"
            textColor="text-gray-700"
            textSize="text-xs"
          />
        )}

        {secondDescription && (
          <Card.TextComponent 
            text={secondDescription}
            textColor="text-gray-700"
            textSize="text-xs"
          />
        )}
      </View>

     {formatDate && (
      <Card.TextComponent
        text={formatDate}
        textColor="text-gray-700"
        textSize="text-xs"
      >
        <AntDesign 
          size={8} 
          name="clockcircle" 
          color={colors.gray[700]}
          className="mr-1"
        />
      </Card.TextComponent>
     )}
    </Cta.Description>
  </Cta.Root>
  )
}