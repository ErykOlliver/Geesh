import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../DesigneTokens/metrics";
import { Primmary_Colors, Secondary_Colors } from "../../../DesigneTokens/pallets";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts";

const OptionStyle = StyleSheet.create({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 120 * (Screen_Size.width / 1080),
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        display: 'flex',
        width: 100 * (Screen_Size.width / 1080),
        height: 100 * (Screen_Size.width / 1080),
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        width: 865 * (Screen_Size.width / 1080),
        height: '100%',
        paddingRight: 35 * (Screen_Size.width / 1080),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5

    },
    title: {
        fontFamily: Geesh_Fonts.InriaLight,
        fontSize: Text_Sizes.h3,
    }
})

export default OptionStyle;