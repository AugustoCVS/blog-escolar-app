import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { usePost } from "./post.hook";

export default function Post() {
  const { postId } = useLocalSearchParams();
  const { states } = usePost(postId as string);

  return (
    <View>
      <Text>Post ID: {states.postId}</Text>
    </View>
  )
}