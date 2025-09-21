import TabRoutes from "./tab.routes";
import Login from "../Screens/Login/Login.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={TabRoutes} />
            </Stack.Navigator >
        </NavigationContainer>
    )
}