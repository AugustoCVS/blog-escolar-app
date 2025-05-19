import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import { Card } from "../../cards/card";
import { Cta } from "../cta";
import { ICtaPost } from "./cta-post.types";

export const CtaPost: React.FC<ICtaPost> = ({
  imgUrl,
  alt,
  imageBgColor,
  title,
  discount,
  firstDescription,
  secondDescription,
  expirationDate,
  onPress
}) => {
  const expirationText = expirationDate === 1 ? "dia" : "dias";

  return (
    <Cta.Root
      discount={discount}
      onPress={onPress}
    >
    {imgUrl && (
      <Cta.Image 
        source={imgUrl}
        alt={alt || ""}
        bgColor={imageBgColor || "bg-white-100"}
      />
    )}

    <Cta.Description>
      
      {title && (
        <Card.Title  
          title={title}
          textColor="text-white-100 text-sm"
          shouldHavePadding={false}
        />
      )}

      <View
        className="flex flex-col"
      >
        {firstDescription && (
          <Card.TextComponent 
            text={firstDescription}
            textColor="text-white-100"
            textSize="text-xs"
          />
        )}

        {secondDescription && (
          <Card.TextComponent 
            text={secondDescription}
            textColor="text-white-100"
            textSize="text-xs"
          />
        )}
      </View>

     {expirationDate && (
      <Card.TextComponent
        text={`Vence em ${expirationDate} ${expirationText}`}
        textColor="text-white-100"
        textSize="text-xs"
      >
        <AntDesign 
          size={8} 
          name="clockcircle" 
          color='white-100' 
          className="mr-1"
        />
      </Card.TextComponent>
     )}
    </Cta.Description>
  </Cta.Root>
  )
}