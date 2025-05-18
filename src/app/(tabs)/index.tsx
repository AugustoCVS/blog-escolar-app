import { Redirect } from 'expo-router';
import { ScrollView } from 'native-base';
import { Text, View } from 'react-native';
import { useHome } from './hooks/home/home.hook';

export default function Home() {
  const { states } = useHome();

  if (states.loading) {
    return <Text>Loading...</Text>;
  }

  if (!states.token) {
    return <Redirect href="/screens/auth/auth" />;
  }

  return (
    <ScrollView 
      className="flex-1"
      showsVerticalScrollIndicator={false}
      onScrollToTop={() => {}}
    >
      <View
        className='flex items-center justify-center h-screen'
      >
        <Text>Hello world</Text>
      </View>
    </ScrollView>
  );
} 