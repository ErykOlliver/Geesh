import { useFonts } from 'expo-font';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import './i18nify'
import { Screen_Size } from './src/components/DesigneTokens/metrics';
import { Geesh_Secondary_Colors } from './src/components/DesigneTokens/pallets';
import NavContainer from './src/routes/index';
import { ThemeProvider, useTheme } from './src/components/DesigneTokens/themeContext';



export default function App() {
  const [fontsLoaded] = useFonts({
    'InriaSans-Regular': require('./src/components/fonts/Inria_Sans/InriaSans-Regular.ttf'),
    'InriaSans-Bold': require('./src/components/fonts/Inria_Sans/InriaSans-Bold.ttf'),
    'InriaSans-Light': require('./src/components/fonts/Inria_Sans/InriaSans-Light.ttf'),
    'Inter-SemiBold': require('./src/components/fonts/Inter/Inter_28pt-SemiBold.ttf'),
    'Poppins-Regular': require('./src/components/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Light': require('./src/components/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Medium': require('./src/components/fonts/Poppins/Poppins-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
          <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <NavContainer />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemeProvider>
  );
}