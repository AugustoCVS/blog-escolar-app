import { FontAwesome, FontAwesome5, MaterialCommunityIcons, AntDesign  } from "@expo/vector-icons";

import { Card } from "../card"
import { colors } from "@/styles/colors";
import { Button } from "../../button/button.component";
import { IInfluencerCard } from "./card-influencer.types";

export const InfluencerCard: React.FC<IInfluencerCard> = ({
  imageSrc,
  alt,
  bgColor,
  title,
  views,
  lastUpdate,
  isFollowing,
  action = () => {}
}) => {
  return (
    <Card.Root
      maxWidth={200}
      minHeight={230}
      shouldHaveItensCentered={true}
    >
      {imageSrc && (
          <Card.ImageInfluencers
          source={imageSrc}
          alt={alt || ""}
          className="-mt-24"
          bgColor={bgColor}
        />
      )}

      {title && (
        <Card.Description
          isRow={true}
        >
            <Card.Title 
              title={title}
            />

          <MaterialCommunityIcons name="check-decagram" size={12} color={colors.orange[200]} />
        </Card.Description>
      )} 

      <Card.Description
        shouldHaveItensCentered={true}
      >
        {views && (
          <Card.Description
            isRow={true}
          >
            <Card.TextComponent 
              text="+ de"
              highlightedText={views}
              textSize="text-base"
              textColor="text-black"
            />
  
            <Card.TextComponent 
              text="avaliações"
              textSize="text-base"
              textColor="text-black"
            />
          </Card.Description>
        )}

        {lastUpdate && (
          <Card.TextComponent 
            text={`Última atualização: ${lastUpdate}`}
            textSize="text-xs"
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

      {isFollowing ? (
        <Card.Description
          isSpaceBetween={true}
          marginTop={4}
        >
          <Card.TextComponent 
            highlightedText="Já está seguindo!"
          />

          <Card.Tag
            backgroundTagSize={16}
            shouldHaveBorder={false}
            shouldBeFixed={false}
            tagBackground="bg-orange-200"
          >
            <FontAwesome name="user-o" size={8} color="white" />
          </Card.Tag>
        </Card.Description>
      ) : (
        <Button 
          testID="follow-button"
          text="Seguir influencer"
          rightIcon={
            <AntDesign name="pluscircle" size={10} color={colors.orange[200]} />
          }
          onPress={action}
          className="flex items-center justify-center w-full bg-transparent border border-orange-200 rounded-full mt-3 h-[25px]"
          textSize="text-sm"
          textColor="text-orange-200"
          textBold="font-semibold"
        />
      )}
    </Card.Root>
  )
}