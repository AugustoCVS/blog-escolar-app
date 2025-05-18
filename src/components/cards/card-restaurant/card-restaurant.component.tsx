import { AntDesign, FontAwesome5 } from "@expo/vector-icons"

import { Card } from "../card"
import { colors } from "@/styles/colors"
import { formatCurrency } from "@/utils/formatters"
import { Button } from "../../button/button.component"
import { ICardRestaurant } from "./card-restaurant.types"

export const CardRestaurant: React.FC<ICardRestaurant> = ({
  price,
  title,
  tagText,
  imageSrc,
  imageAlt,
  maxRating,
  buttonText,
  isFavorited,
  shouldRenderTag,
  restaurantRating,
  priceDescription,  
  addressDescription,
  distanceDescription,
  action,
  rootAction
}) => {
  return (
    <Card.Root
      maxWidth={267}
      onPress={rootAction}
    >
      {imageSrc && (
        <Card.Image 
          source={imageSrc}
          alt={imageAlt || ""}
        >
          <Card.Tag 
            text={tagText} 
            shouldRenderTag={shouldRenderTag}
            shouldHaveBorder={shouldRenderTag}
          />
        </Card.Image>
      )}
      
      {title && (<Card.Title title={title} />)}

      <Card.Description>
        <Card.Description isSpaceBetween={true}>
          {addressDescription && (
            <Card.TextComponent
              text={addressDescription}
            />
          )}

          {distanceDescription && (
            <Card.TextComponent
              text={distanceDescription}
              isDarkText={true}
            >
              <FontAwesome5 
                name="map-marker-alt" 
                size={8} 
                color={colors.gray[400]} 
                style={{ marginRight: 4 }}
              />
            </Card.TextComponent>
          )}
        </Card.Description>

        {(priceDescription && price) && (
          <Card.TextComponent 
            text={priceDescription}
            highlightedText={formatCurrency(price)}
          />
        )}
      </Card.Description>
      
      <Card.Divider />

      {(restaurantRating && maxRating) && (
        <Card.Rating
          rating={restaurantRating}
          maxRating={maxRating}
        >
          <Card.TextComponent
            text={`${restaurantRating} (${maxRating.toFixed(1)})`}
          />
        </Card.Rating>
      )}

    {action && (
      <Card.Description
        isSpaceBetween={true}
        marginTop={4}
      >
        <Button 
          text={buttonText}
          textColor="text-white-100"
          className="bg-orange-100 py-[4px] px-[12px] rounded-full items-center justify-center w-[121px] h-[32px]"
          textBold="font-semibold"
          textSize="text-sm"
          onPress={action}
        />

        <Card.Tag
          shouldBeFixed={false}
          tagBackground="bg-orange-300"
          shouldHaveBorder={false}
          backgroundTagSize={32}
        >
          <AntDesign name="heart" size={14} color={isFavorited ? colors.orange[200] : 'white-100'} />
        </Card.Tag>
      </Card.Description>
    )}
    </Card.Root>
  )
}