import { FlatList, View } from "react-native";

import { Button } from "@/components/button/button.component";
import { CtaPost } from "@/components/ctas/cta-post/cta-post.component";
import { Redirect } from "expo-router";
import { Header } from './components/users/header/header.component';
import { useUsers } from "./hooks/users/users.hook";

export default function Users() {
  const { states, actions } = useUsers();

    if (!states.user.isAdmin) {
      return <Redirect href="/(tabs)" />;
    }

   return (
     <View className="flex-1 bg-white-200">
      <Header 
        name={states.user.name}
        createUser={actions.handleNavigateToCreateUser}
      />
 
      <FlatList 
         data={states.usersList}
         keyExtractor={(item) => item.id}
         horizontal={false}
         showsVerticalScrollIndicator={false}
         onRefresh={actions.handleRefresh}
         refreshing={states.loadingRefresh}
         contentContainerClassName='px-4 gap-4 py-4'
         renderItem={({ item }) => (
            <View
              className="w-full flex flex-row items-center"
            >
              <CtaPost
                width="w-4/5"
                title={item.name}
                firstDescription={item.email}
                onPress={() => actions.handleNavigateToUser(item.id)}
              />

              <View
                className="gap-2 flex-1"
              >
                <Button
                  text="Editar"
                  textColor="text-white-100"
                  className="w-full p-2 bg-green-400 rounded-md"
                  onPress={() => actions.handleNavigateToUser(item.id)}
                />

                <Button
                  text="Deletar"
                  textColor="text-white-100"
                  className="w-full p-2 bg-red-400 rounded-md"
                  onPress={() => actions.handleDeleteUser(item.id)}
                />
              </View>
            </View>
         )}
      />
     </View>
   );
}