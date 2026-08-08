import TabRoutes from "./tab.routes";
import Login from "../Screens/Login/Login";
import OnBoarding from "../Screens/OnBoarding/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Stack = createStackNavigator()

export default function NavContainer() {
    const [SeeOnBoarding, setSeeOnBoarding] = useState(false)

    const checkOnBoarding = async () => {
        try {
            const value = await AsyncStorage.getItem('@geesh_onboarding_completed');
            if (value === 'true') {
                setSeeOnBoarding(true);
                console.log("Salvo")
            }
        } catch (err) {
            console.error('Erro ao verificar onBoarding:', err)
        }
    }

    useEffect(() => {
        checkOnBoarding();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} initialRouteName={SeeOnBoarding ? 'Login' : 'onBoarding'} screenOptions={{ headerShown: false }} >
                <Stack.Screen name="onBoarding" component={OnBoarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={TabRoutes} />
            </Stack.Navigator >
        </NavigationContainer>
    )
}