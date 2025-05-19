import { Card } from "@/components/cards/card"
import { View } from "react-native"
import { Cta } from "../cta"
import { ICtaUser } from "./cta-user.types"

export const CtaUser: React.FC<ICtaUser> = ({
  title,
  description,
  icon,
}) => {
  
  return (
    <Cta.Root
      width="w-full"
      borderRadius="rounded-[0px]"
      height="h-fit"
    >
      <View className="mt-2">
        {icon}
      </View>

      <Cta.Description
        gap={1}
      >
        {title && (
          <Card.Title 
            title={title}
            textColor="text-gray-800"
          />
        )}

        {description && (
          <Card.TextComponent 
            text={description}
            textColor="text-gray-400"
            textSize="text-sm"
            bold="font-medium"
          />
        )}
      </Cta.Description>
    </Cta.Root>
  )
}