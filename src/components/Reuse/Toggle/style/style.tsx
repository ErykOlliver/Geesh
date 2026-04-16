import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../DesigneTokens/metrics";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../DesigneTokens/pallets";

const ToggleStyle = StyleSheet.create({
    onToggle: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 15 * (Screen_Size.width / 1080),
        width: 150 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        borderRadius: 100 * (Screen_Size.width / 1080),
        borderWidth: 1 * (Screen_Size.width / 1080)
    },
    offToggle: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 15 * (Screen_Size.width / 1080),
        width: 150 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        borderRadius: 100 * (Screen_Size.width / 1080),
        borderWidth: 1 * (Screen_Size.width / 1080)
    },
    Circle: {
        width: 50 * (Screen_Size.width / 1080),
        height: 50 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Primmary_Colors.Azure,
        borderRadius: 100 * (Screen_Size.width / 1080),

    }
})

export default ToggleStyle;