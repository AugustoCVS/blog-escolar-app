import React from "react";
import { FlatList, View } from "react-native";
import { IHorizontalList } from "./horizontal-list.types";

export const HorizontalList = <T,>({
  data,
  keyExtractor,
  children,
  className = "",
}: IHorizontalList<T>) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      className={className}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      renderItem={({ item }) => {
        const child = children(item);
        return React.isValidElement(child) ? child : null;
      }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
};