import { useFonts } from 'expo-font';
import Login from './src/Screens/Login/Login';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import './i18nify'
import Home from './src/Screens/Home/Home';
import Chart from './src/Screens/Chart/Chart';
import Profile from './src/Screens/Profile/Profile';
import { Screen_Size } from './src/components/DesigneTokens/metrics';
import { Geesh_Secondary_Colors } from './src/components/DesigneTokens/pallets';
import NavContainer from './src/routes/index';



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
    <SafeAreaView style={{ flex: 1, backgroundColor: Geesh_Secondary_Colors.White }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, paddingBottom: 100 * (Screen_Size.width / 1080)}}>
        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <NavContainer />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}