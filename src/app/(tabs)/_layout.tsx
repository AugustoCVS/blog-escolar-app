import { RootState } from '@/redux/store';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { Platform, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

export default function TabLayout() {
  const user = useSelector((state: RootState) => state.user);
  const isAdmin = user.isAdmin;
  const { bottom } = useSafeAreaInsets();
  const isIOS = Platform.OS === 'ios';

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f48a11",
        tabBarInactiveTintColor: "#ABABAB",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute', 
          bottom: 0,
          height: 40, 
          width: '75%',
          marginBottom: 30,
          paddingBottom: isIOS ? bottom : 10,
          borderRadius: 20,
          marginLeft: '12.5%',
          marginRight: '12.5%',
        },
        tabBarBackground: () => (
          <BlurView
            intensity={90}
            tint="light"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 40,
              width: '100%',
              borderRadius: 20,
              overflow: 'hidden',
            }}
            experimentalBlurMethod="dimezisBlurView"
          />
        ),
        tabBarButton: (props) => (
          <Pressable
            {...props as any}
            android_ripple={{ borderless: true, color: "transparent" }}
            style={props.style}
          >
            {props.children}
          </Pressable>
        ),
      }}
    >

      <Tabs.Screen
        name="users"
        options={{
          title: 'Usuários',
          tabBarIcon: ({ color, focused }) => (
            <View 
              className={`${isAdmin ? 'flex' : 'hidden'} ${focused && 'shadow-md shadow-orange-100'} rounded-full`}
              pointerEvents={isAdmin ? 'auto' : 'none'}
            >
              <FontAwesome size={22} name="users" color={color} />
            </View>
          ),
          tabBarButton: (props) =>
            isAdmin ? (
              <Pressable {...props as any} android_ripple={{ borderless: true, color: "transparent" }} style={props.style}>
                {props.children}
              </Pressable>
            ) : (
              <View style={props.style} pointerEvents="none">
                {props.children}
              </View>
            ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${focused && 'shadow-md shadow-orange-100'} rounded-full`}
            >
              <FontAwesome size={24} name="home" color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${isAdmin ? 'flex' : 'hidden'} ${focused && 'shadow-md shadow-orange-100'} rounded-full`}
            >
              <FontAwesome size={24} name="user" color={color} />
            </View>
          ),
          tabBarButton: (props) =>
            isAdmin ? (
              <Pressable {...props as any} android_ripple={{ borderless: true, color: "transparent" }} style={props.style}>
                {props.children}
              </Pressable>
            ) : (
              <View style={props.style} pointerEvents="none">
                {props.children}
              </View>
            ),
        }}
      />
    </Tabs>
  )}