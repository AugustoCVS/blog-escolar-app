import { FontAwesome5 } from "@expo/vector-icons"

import { Card } from "../../cards/card"
import { Cta } from "../cta"
import { colors } from "@/styles/colors"
import { ICtaOptions } from "./cta-options.types"

export const CtaOptions: React.FC<ICtaOptions> = ({
  imgUrl,
  bgImageColor = "bg-white-100",
  alt,
  title,
  addressDescription,
  rating,
  maxRating,
  distance,
  maxWidth,
  maxHeight,
  onPress,
}) => {
  return (
     <Cta.Root
        isCoupon={false}
        onPress={onPress}
      >
        {imgUrl && (
          <Cta.Image 
            source={imgUrl}
            alt={alt || ""}
            bgColor={bgImageColor}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
          />
        )}
        
        <Cta.Description
          gap={1}
        >
          {title && (
            <Card.Title 
              title={title}
              shouldHavePadding={false} 
            />
          )}

          {addressDescription && (
            <Card.TextComponent
              text={addressDescription}
            />
          )}

          {rating && maxRating && (
            <Card.Rating 
              maxRating={maxRating}
              rating={rating}
            >
              <Card.TextComponent
                text={`${rating} (${maxRating.toFixed(1)})`}
              />
            </Card.Rating>
          )}

          {distance && (
            <Card.TextComponent
              text={`${distance} km`}
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
        </Cta.Description>
      </Cta.Root>
    
  )
}