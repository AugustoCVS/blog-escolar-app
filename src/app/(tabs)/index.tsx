import { CtaPost } from '@/components/ctas/cta-post/cta-post.component';
import { Redirect } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { Header } from './components/home/header/header.component';
import { useHome } from './hooks/home/home.hook';

export default function Home() {
  const { states, actions } = useHome();

  if (states.loading || states.loadingRefesh) {
    return <Text>Loading...</Text>;
  }

  if (!states.token) {
    return <Redirect href="/screens/auth/auth" />;
  }

  return (
    <View className="flex-1 bg-white-200">
     <Header 
        name={states.user.name}
        value={states.search}
        setValue={actions.handleDebounceSearch}
        createPost={actions.handleNavigateToCreatePost}
     />

     <FlatList 
        data={states.posts}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        onRefresh={actions.handleRefresh}
        refreshing={states.loadingRefesh}
        onEndReached={actions.handleLoadMore}
        onEndReachedThreshold={0.1}
        contentContainerClassName='px-4 gap-4 py-4'
        renderItem={({ item }) => (
          <CtaPost
            title={item.title}
            firstDescription={item.author.name}
            secondDescription={item.content}
            date={item.createdAt}
            onPress={() => actions.handleNavigateToPost(item.id)}
          />
        )}
     />
    </View>
  );
} 