import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HugeiconsIcon } from "@hugeicons/react-native";
import TabRoutesStyle from "./style/TabRoutesStyle";

//#region Modules/Screens
import Home from "../Screens/Home/Home";
import Chart from "../Screens/Chart/Chart";
import Profile from "../Screens/Profile/Profile";
import { Analytics03Icon, Home11Icon, User03Icon, } from "@hugeicons/core-free-icons";
//#endregion

//#region TabRoutes

const TAB = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <TAB.Navigator
            screenOptions={{
                tabBarStyle: TabRoutesStyle.Tab,
                tabBarLabelStyle: TabRoutesStyle.TabLabel,
                headerShown: false,
                tabBarActiveTintColor: '#029FFC',
                tabBarInactiveTintColor: '#000'
            }}>

            <TAB.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HugeiconsIcon icon={Home11Icon} size={size + 5} strokeWidth={1.5} color={color} />
                    ),
                }}
            />

            <TAB.Screen name="Chart" component={Chart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HugeiconsIcon icon={Analytics03Icon} size={size + 5} strokeWidth={1.5} color={color} />
                    ),
                }}
            />

            <TAB.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <HugeiconsIcon icon={User03Icon} size={size + 5} strokeWidth={1.5} color={color} />
                )
            }} />
        </TAB.Navigator >
    )
}

//#endregion