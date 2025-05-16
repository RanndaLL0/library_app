import * as React from 'react';

import AppNavigation from './src/navigation/stack_navigation';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);