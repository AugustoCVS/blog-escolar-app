import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import { Header } from './components/home/header/header.component';
import { useHome } from './hooks/home/home.hook';

export default function Home() {
  const { states, actions } = useHome();

  if (states.loading) {
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
     />
    </View>
  );
} 