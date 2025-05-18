import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { Card } from "../card";
import { ICardReview } from "./card-review.types";

export const CardReview: React.FC<ICardReview> = ({
  userName,
  userTag,
  userImage,
  reviewText,
  reviewDate,
  rating,
  maxRating,
}) => {
  return (
    <View className="flex flex-row items-center w-[350px] max-w-[350opx] flex-shrink gap-3 bg-white-100 rounded-lg px-3 py-[18px] shadow">
        <View className="flex items-center justify-center">
          <View className="w-12 h-12 rounded-full bg-gray-200" />
        </View>

        <Card.Description
          gap="gap-[10px]"
        >
          {userName && (
            <Card.TextComponent 
              text={userName}
              highlightedText={userTag}
              highlightedTextColor="text-gray-700"
              isHighlightedTextBold
            />
          )}

          {reviewText && (
            <Card.TextComponent 
              textWidth={"w-[90%]"}
              text={reviewText}
            />
          )}

          {reviewDate && (
            <Card.TextComponent 
              text={reviewDate}
              isDarkText
            >
              <AntDesign name="clockcircle" size={12} color={colors.orange[100]} className="mr-2" />
            </Card.TextComponent>
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
        </Card.Description>
      </View>
  )
}