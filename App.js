import { useFonts } from 'expo-font';
import NavContainer from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    'InriaSans-Regular': require('./src/components/fonts/Inria_Sans/InriaSans-Regular.ttf'),
    'InriaSans-Bold': require('./src/components/fonts/Inria_Sans/InriaSans-Bold.ttf'),
    'InriaSans-Light': require('./src/components/fonts/Inria_Sans/InriaSans-Light.ttf'),
    'Poppins-Regular': require('./src/components/fonts/Poppins/Poppins-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavContainer />
  );
}