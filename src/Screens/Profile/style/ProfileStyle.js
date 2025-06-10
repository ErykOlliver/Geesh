import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Secondary_Colors } from "../../../components/DesigneTokens/pallets";

const ProfileStyle = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: Screen_Size.height
    },
    header: {
        backgroundColor: Secondary_Colors.White90,
        width: Screen_Size.width,
        height: "28%"
    },
    MainContent: {
        backgroundColor: Secondary_Colors.White90,
        width: Screen_Size.width,
        height: "72%"

    }
})

export default ProfileStyle;