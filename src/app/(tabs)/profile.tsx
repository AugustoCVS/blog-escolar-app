import { Button } from "@/components/button/button.component";
import { CtaPost } from "@/components/ctas/cta-post/cta-post.component";
import { FlatList, View } from "react-native";

import { Header } from "./components/profile/header/header.component";
import { useProfile } from "./hooks/profile/profile.hook";

export default function Profile() {
  const { states, actions } = useProfile();

  return (
    <View className="flex-1 bg-white-200">
      <Header
        createPost={actions.handleNavigateToCreatePost}
        createUser={() => {}}
        name={states.user.name}
      />

      <FlatList 
        data={states.posts}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        onRefresh={actions.handleRefresh}
        refreshing={states.loading}
        onEndReached={actions.handleLoadMore}
        onEndReachedThreshold={0.1}
        contentContainerClassName='px-4 gap-4 py-4'
        renderItem={({ item }) => (
          <View
            className="w-full flex flex-row items-center"
          >
            <CtaPost
              width="w-4/5"
              title={item.title}
              firstDescription={item.author.name}
              secondDescription={item.content}
              date={item.createdAt}
              onPress={() => actions.handleNavigateToPost(item.id)}
            />

            <View
              className="gap-2 flex-1"
            >
              <Button
                text="Editar"
                textColor="text-white-100"
                className="w-full p-2 bg-green-400 rounded-md"
                onPress={() => actions.handleNavigateToPost(item.id)}
              />

              <Button
                text="Deletar"
                textColor="text-white-100"
                className="w-full p-2 bg-red-400 rounded-md"
                onPress={() => actions.handleDeletePost(item.id)}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}