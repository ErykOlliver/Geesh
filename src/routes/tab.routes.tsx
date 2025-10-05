import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabRoutesStyle from "./style/TabRoutesStyle";
//#region Modules/Screens
import Home from "../Screens/Home/Home";
import Chart from "../Screens/Chart/Chart";
import Profile from "../Screens/Profile/Profile";
import { useTranslation } from "react-i18next";
import { Screen_Size} from "../components/DesigneTokens/metrics";
import { ChartColumn, House, Moon, Sun, User, View, Wind } from "lucide-react-native";

//#endregion


//#region TabRoutes

const TAB = createBottomTabNavigator();

export default function TabRoutes() {
    const { t, i18n } = useTranslation();
    return (
        <TAB.Navigator id={undefined}
            screenOptions={{
                tabBarStyle: TabRoutesStyle.Tab,
                tabBarLabelStyle: TabRoutesStyle.TabLabel,
                headerShown: false,
                tabBarActiveTintColor: '#029FFC',
                tabBarInactiveTintColor: '#000'
            }
            }>

            <TAB.Screen name={t("Inicio")} component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <House size={size + 10 * (Screen_Size.width / 1080)} color={color} strokeWidth={4 * (Screen_Size.width / 1080)} />
                    ),
                }}
            />

            < TAB.Screen name={t("Gráfico")} component={Chart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ChartColumn size={size + 10 * (Screen_Size.width / 1080)} color={color} strokeWidth={4 * (Screen_Size.width / 1080)} />
                    ),
                }}
            />

            < TAB.Screen name={t("Perfil")} component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <User size={size + 10 * (Screen_Size.width / 1080)} color={color} strokeWidth={4 * (Screen_Size.width / 1080)} />
                )
            }} />
        </TAB.Navigator >
    )
}

//#endregion