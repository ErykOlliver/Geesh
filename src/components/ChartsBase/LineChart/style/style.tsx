import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts";

const style = StyleSheet.create({
    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 15 * (Screen_Size.width / 1080),
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20 * (Screen_Size.width / 1080),
        justifyContent: 'space-between',
    },
    Title: {
        paddingVertical: 6 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.InriaBold,
        fontSize: Text_Sizes.h3,
    },
    FilterPlace: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default style;