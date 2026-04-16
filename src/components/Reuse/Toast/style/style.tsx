import { StyleSheet } from "react-native";
import { Geesh_Secondary_Colors } from "../../../DesigneTokens/pallets";
import { Screen_Size, Text_Sizes } from "../../../DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts";

const ToastStyles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10 * (Screen_Size.width / 1080),

    },
    toast: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        padding: 15 * (Screen_Size.width / 1080),
        borderRadius: 10 * (Screen_Size.width / 1080),
        borderWidth: 4 * (Screen_Size.width / 1080)
    },
    title: {
        fontFamily: Geesh_Fonts.InriaBold,
        fontSize: Text_Sizes.h3,
        color: Geesh_Secondary_Colors.White,
    },
    desc: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.InriaLight,
        color: Geesh_Secondary_Colors.White,
    },
});

export default ToastStyles