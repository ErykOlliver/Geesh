import { useFonts } from 'expo-font';
import NavContainer from './src/routes';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'InriaSans-Regular': require('./src/components/fonts/Inria_Sans/InriaSans-Regular.ttf'),
    'InriaSans-Bold': require('./src/components/fonts/Inria_Sans/InriaSans-Bold.ttf'),
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