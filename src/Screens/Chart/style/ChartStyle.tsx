import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import { Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";

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
        height: 270 * (Screen_Size.width / 1080),
    },
    HeaderContainer: {
        display: 'flex',
        width: '90%',
        paddingTop: 90 * (Screen_Size.width / 1080),
        flexDirection: 'row',
        alignItems: 'center',
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
        fontFamily: Geesh_Fonts.PoppinsRegular,
    },
    ChartIndicator: {
        fontSize: 36 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.PoppinsLight,
        textTransform: 'uppercase',
    },
    MainContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: Screen_Size.width,
        height: '100%'
    },

    MainContentContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: '77%',
        flexDirection: 'column',
    },
    ChartsPlace: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 10 * (Screen_Size.width / 1080),
        flexDirection: 'row',
        width: Screen_Size.width * 2,
    },
    Charts: {
        display: 'flex',
        alignItems: 'center',
        width: Screen_Size.width,
        paddingBottom: 130 * (Screen_Size.width / 1080),
        flexDirection: 'column',
        gap: 100 * (Screen_Size.width / 1080),
    },
    WindSunPlace:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    SwitchChart:{
        display: 'flex',
        width: 244 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White70,
        flexDirection: 'row',
        borderRadius: 100 * (Screen_Size.width / 1080),
        justifyContent: 'space-between',
        paddingHorizontal: 40 * (Screen_Size.width / 1080),
        alignItems: 'center',
        
        
    }
})

export default ChartStyle;