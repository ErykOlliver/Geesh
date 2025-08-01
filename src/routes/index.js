import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes.js";

export default function NavContainer() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}