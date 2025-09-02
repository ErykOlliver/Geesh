import { useFonts } from 'expo-font';
import Login from './src/Screens/Login/Login';
import NavContainer from './src/routes';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import './i18nify.js'



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
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 30 }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <NavContainer />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}