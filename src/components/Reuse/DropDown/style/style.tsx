import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../DesigneTokens/metrics.js";
import { Secondary_Colors } from "../../../DesigneTokens/pallets.js";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts.js";

const style = StyleSheet.create({
    body: {
        width: 400 * (Screen_Size.width / 1080),
        height: 94 * (Screen_Size.width / 1080),
        borderRadius: 15 * (Screen_Size.width / 1080),
        borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 400 * (Screen_Size.width / 1080),
        padding: 20 * (Screen_Size.width / 1080),
        height: 94 * (Screen_Size.width / 1080),
        backgroundColor: Secondary_Colors.White70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.InriaRegular
    }
})

export default style;