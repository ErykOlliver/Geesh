import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../components/DesigneTokens/metrics.js";
import { Geesh_Secondary_Colors } from "../../components/DesigneTokens/pallets.js";
import { Geesh_Fonts } from "../../components/DesigneTokens/fonts.js";


const TabRoutesStyle = StyleSheet.create({
    Tab: {
        backgroundColor: Geesh_Secondary_Colors.White,
        elevation: 10,
        height: 160 * (Screen_Size.width / 1080),
        paddingTop: 10 * (Screen_Size.width / 1080),
    },
    TabLabel: {
        fontSize: Text_Sizes.h6,
        marginTop: 1 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.InriaBold
    }
})

export default TabRoutesStyle;