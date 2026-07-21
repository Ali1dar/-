// App.js
// Entry point: forces RTL layout, then sets up the Stack Navigator.
import React, { useEffect } from 'react';
import { I18nManager, Platform } from 'react-native';
import * as Updates from 'expo-updates';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ShopDetailsScreen from './screens/ShopDetailsScreen';

const Stack = createNativeStackNavigator();

// --- Force RTL globally ---------------------------------------------------
// I18nManager.forceRTL only takes effect after the app is reloaded, so on
// first launch (when it's not yet enabled) we flip it and trigger a reload.
// On subsequent launches isRTL will already be true and this is skipped.
const enforceRTL = async () => {
  if (!I18nManager.isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    try {
      // Reload so the native layout direction actually applies.
      if (Platform.OS !== 'web') {
        await Updates.reloadAsync();
      }
    } catch (e) {
      // expo-updates isn't available in every environment (e.g. Expo Go
      // in some setups) — RTL styles in this project are also applied
      // manually via style props, so the UI still reads correctly.
      console.log('RTL reload skipped:', e.message);
    }
  }
};

export default function App() {
  useEffect(() => {
    enforceRTL();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a1a' },
          headerTintColor: '#FFD700',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'دليل الصياغ' }}
        />
        <Stack.Screen
          name="ShopDetails"
          component={ShopDetailsScreen}
          options={{ title: 'تفاصيل المحل' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

