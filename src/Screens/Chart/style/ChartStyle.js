import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import MainContent from "../components/MainContent";

const ChartStyle = StyleSheet.create({
    Body: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
    },
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
    },
    MainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Screen_Size.width,
    },

    MainContentContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 230,

    }
})

export default ChartStyle;