import { Slackey_400Regular } from '@expo-google-fonts/slackey/400Regular';
import { useFonts } from '@expo-google-fonts/slackey/useFonts';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { Host } from "react-native-portalize";
import { Provider } from "react-redux";
import ToastManager from 'toastify-react-native';

import { UserInfo } from '@/providers/user';
import { store } from '@/redux/store';
import MainStack from "@/routes";
import "@/styles/global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  
  const [fontsLoaded] = useFonts({
    Slackey_400Regular,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Host>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <PaperProvider>
                <UserInfo>
                  <StatusBar style="light" />
                  <ToastManager />
                  <MainStack />
                </UserInfo>
              </PaperProvider>
            </QueryClientProvider>
          </Provider>
        </Host>
      </NativeBaseProvider>
    </GestureHandlerRootView>
      
  );
}
