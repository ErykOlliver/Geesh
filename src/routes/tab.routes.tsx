import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabRoutesStyle from "./style/TabRoutesStyle.js";

//#region Modules/Screens
import Home from "../Screens/Home/Home.js";
import Chart from "../Screens/Chart/Chart.js";
import Profile from "../Screens/Profile/Profile.js";
import { Analytics03Icon, Home11Icon, User03Icon, } from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";
import { Screen_Size } from "../components/DesigneTokens/metrics";
import { HugeiconsIcon } from "@hugeicons/react-native";

//#endregion


//#region TabRoutes

const TAB = createBottomTabNavigator();

export default function TabRoutes() {
    const { t, i18n } = useTranslation();
    return (
        <TAB.Navigator
            screenOptions= {{
        tabBarStyle: TabRoutesStyle.Tab,
            tabBarLabelStyle: TabRoutesStyle.TabLabel,
                headerShown: false,
                    tabBarActiveTintColor: '#029FFC',
                        tabBarInactiveTintColor: '#000'
    }
}>

    <TAB.Screen name={ t("Inicio") } component = { Home }
options = {{
    tabBarIcon: ({ color, size }) => (
        <HugeiconsIcon icon= { Home11Icon } size = { size + 10 * (Screen_Size.width / 1080)
} strokeWidth = { 1.5} color = { color } />
                    ),
                }}
            />

    < TAB.Screen name = { t("Gráfico") } component = { Chart }
options = {{
    tabBarIcon: ({ color, size }) => (
        <HugeiconsIcon icon= { Analytics03Icon } size = { size + 10 * (Screen_Size.width / 1080)
} strokeWidth = { 1.5} color = { color } />
                    ),
                }}
            />

    < TAB.Screen name = { t("Perfil") } component = { Profile } options = {{
    tabBarIcon: ({ color, size }) => (
        <HugeiconsIcon icon= { User03Icon } size = { size + 10 * (Screen_Size.width / 1080)
} strokeWidth = { 1.5} color = { color } />
                )
            }} />
    </TAB.Navigator >
    )
}

//#endregion