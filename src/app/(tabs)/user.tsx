import { Button } from "@/components/button/button.component";
import { CtaPost } from "@/components/ctas/cta-post/cta-post.component";
import { FlatList, View } from "react-native";
import { Header } from "./components/user/header/header.component";
import { useUser } from "./hooks/user/user.hook";

export default function User() {
  const { states, actions } = useUser();

  return (
    <View className="flex-1 bg-white-200">
      <Header
        createPost={() => {}}
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
              className="gap-4 flex-1"
            >
              <Button
                text="Editar"
                textColor="text-white-100"
                className="w-full p-2 bg-green-500 rounded-md"
              />

              <Button
                text="Deletar"
                textColor="text-white-100"
                className="w-full p-2 bg-red-500 rounded-md"
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}