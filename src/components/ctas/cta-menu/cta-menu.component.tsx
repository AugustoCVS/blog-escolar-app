import { Card } from "@/components/cards/card"
import { Cta } from "../cta"
import { ICtaMenu } from "./cta-menu.types"
import { View } from "react-native"
import { Tags } from "@/components/tags/tags.component"

export const CtaMenu: React.FC<ICtaMenu> = ({
  title,
  description,
  icon,
  tagsList
}) => {
  
  return (
    <View
      className="flex flex-col gap-2 border-b-[0.5px] border-b-gray-900"
    >
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

      {(tagsList && tagsList.length) && (
        <View
          className="px-4 mb-4"
        >
          <Card.Description
              isRow
              gap="gap-4"
            >
            { tagsList.map((item) => (
              <Tags 
                key={item.id}
                name={item.name}
                action={() => {}}
                bold="font-normal"
                bgColor="bg-white-200"
                border="border border-white-300"
                textColor="text-gray-600"
              />
            ))}
          </Card.Description>
        </View>
      )}
    </View>
  )
}