import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../DesigneTokens/metrics.js";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../DesigneTokens/pallets.js";

const ToggleStyle = StyleSheet.create({
    onToggle: {
        display: 'flex',
        alignItems: 'flex-start',
        width: 150 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White70,
        borderRadius: 100 * (Screen_Size.width / 1080),
    },
    offToggle: {
        display: 'flex',
        alignItems: 'flex-end',
        width: 150 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White70,
        borderRadius: 100 * (Screen_Size.width / 1080),
    },
    Circle: {
        width: 70 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Primmary_Colors.Azure,
        borderRadius: 100 * (Screen_Size.width / 1080),

    }
})

export default ToggleStyle;