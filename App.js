import * as React from 'react';

import AppNavigation from './src/navigation/stack_navigation';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { useFonts,Inter_600SemiBold,Inter_400Regular,Inter_300Light,Inter_500Medium,Inter_600SemiBold_Italic,Inter_200ExtraLight } from '@expo-google-fonts/inter'

export default function App() {

  const [fontLoaded] = useFonts({
      Inter_600SemiBold,
      Inter_400Regular,
      Inter_300Light,
      Inter_600SemiBold_Italic,
      Inter_500Medium,
      Inter_200ExtraLight
  })

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
