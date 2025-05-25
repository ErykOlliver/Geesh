import { StyleSheet } from "react-native";
import { Text_Sizes } from "../../components/DesigneTokens/metrics";
import { Secondary_Colors } from "../../components/DesigneTokens/pallets";
import { Geesh_Fonts } from "../../components/DesigneTokens/fonts";

const TabRoutesStyle = StyleSheet.create({
    Tab: {
        backgroundColor: Secondary_Colors.White,
        elevation: 10,
        height: 64,
        paddingTop: 5,
    },
    TabLabel: {
        fontSize: Text_Sizes.p,
        marginTop: 1,
        fontFamily: Geesh_Fonts.InriaBold
    }
})

export default TabRoutesStyle;