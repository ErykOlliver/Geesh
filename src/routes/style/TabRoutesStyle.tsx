import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../components/DesigneTokens/metrics";
import { Geesh_Secondary_Colors } from "../../components/DesigneTokens/pallets";
import { Geesh_Fonts } from "../../components/DesigneTokens/fonts";


const TabRoutesStyle = StyleSheet.create({
    Tab: {
        elevation: 10,
        height: 280 * (Screen_Size.width / 1080),
        paddingTop: 10 * (Screen_Size.width / 1080),
    },
    TabLabel: {
        fontSize: Text_Sizes.h5,
        marginTop: 1 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.InriaBold
    }
})

export default TabRoutesStyle;