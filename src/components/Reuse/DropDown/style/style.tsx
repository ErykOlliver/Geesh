import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../DesigneTokens/metrics.js";
import { Secondary_Colors } from "../../../DesigneTokens/pallets.js";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts.js";

const DropDownStyle = StyleSheet.create({
    body: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    main: {
        width: 400 * (Screen_Size.width / 1080),
        height: 94 * (Screen_Size.width / 1080),
        borderRadius: 15 * (Screen_Size.width / 1080),
        backgroundColor: Secondary_Colors.White70,
        display: 'flex',
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 400 * (Screen_Size.width / 1080),
        padding: 18 * (Screen_Size.width / 1080),
        height: 94 * (Screen_Size.width / 1080),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SelectedOption: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.InriaRegular
    },

    Option: {
        fontFamily: Geesh_Fonts.InriaLight,
        fontSize: Text_Sizes.h4,
        borderBottomWidth: 0.5,
    },

    ListVisible: {
        display: 'flex',
        position: 'absolute',
        width: 400 * (Screen_Size.width / 1080),
        paddingTop: 100 * (Screen_Size.width / 1080),
        paddingHorizontal: 10 * (Screen_Size.width / 1080),
        zIndex: 1,
        maxHeight: 350 * (Screen_Size.width / 1080),
    },

    ListContent: {
        borderRadius: 15 * (Screen_Size.width / 1080),
        backgroundColor: Secondary_Colors.White70,
        padding: 15 * (Screen_Size.width / 1080),
        gap: 3

    },
})

export default DropDownStyle;