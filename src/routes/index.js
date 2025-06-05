import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";

export default function NavContainer() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}