import TabRoutes from "./tab.routes";
import Login from "../Screens/Login/Login";
import OnBoarding from "../Screens/OnBoarding/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} initialRouteName="onBoarding" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="onBoarding" component={OnBoarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={TabRoutes} />
            </Stack.Navigator >
        </NavigationContainer>
    )
}