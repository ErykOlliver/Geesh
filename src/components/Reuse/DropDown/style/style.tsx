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
    Title: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.InriaRegular
    },
    
    ListVisible: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 400 * (Screen_Size.width / 1080),
        paddingTop: 100 * (Screen_Size.width / 1080),
        paddingHorizontal: 10 * (Screen_Size.width / 1080),
        zIndex: 1,
        borderWidth: 1,
        height: 150,
        display: 'flex',
    },
    ListHidden: {
        display: 'none',
    },
    ListContent: {
        backgroundColor: Secondary_Colors.Gray,
        borderRadius: 15 * (Screen_Size.width / 1080),
        padding: 10 * (Screen_Size.width / 1080),
        borderWidth: 1,
    }
})

export default DropDownStyle;