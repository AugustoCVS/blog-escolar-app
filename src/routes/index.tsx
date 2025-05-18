import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';
import React from 'react';

export default function MainStack() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}