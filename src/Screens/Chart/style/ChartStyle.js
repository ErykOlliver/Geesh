import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";

const ChartStyle = StyleSheet.create({
    Header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen_Size.width,
    },
    HeaderContainer: {
        width: "90%",
        paddingTop: 70 * (Screen_Size.width / 1080),
        paddingBottom: 15 * (Screen_Size.width / 1080),
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    HeaderBG: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    ChartTitle: {
        fontSize: 100 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.PoppinsRegular
    },
    ChartIndicator: {
        fontSize: 36 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.PoppinsLight
    }
})

export default ChartStyle;