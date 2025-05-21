import { Stack } from 'expo-router/stack';
import React from 'react';

export default function MainStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/auth/auth"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screens/post/[postId]"
        options={{
          title: "Postagem",
        }}
      />
      <Stack.Screen
        name="screens/user/[userId]"
        options={{
          title: "Usuário",
        }}
      />
    </Stack>
  );
}