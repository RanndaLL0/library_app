import { Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_600SemiBold_Italic, useFonts } from '@expo-google-fonts/inter'

import AppNavigation from './src/navigation/stack_navigation';
import { AppRegistry } from 'react-native';
import AuthProvider from './src/auth/auth_provider';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

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
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);