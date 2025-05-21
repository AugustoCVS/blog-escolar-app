import { View } from "react-native";
import { Header } from "./components/user/header/header.component";
import { useUser } from "./hooks/user/user.hook";

export default function User() {
  const { states } = useUser();

  return (
    <View className="flex-1 bg-white-200">
      <Header
        createPost={() => {}}
        createUser={() => {}}
        name={states.user.name}
      />
    </View>
  )
}