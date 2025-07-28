import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../../../../components/DesigneTokens/metrics.js";
import { Secondary_Colors } from "../../../../../../components/DesigneTokens/pallets.js";
import { Geesh_Fonts } from "../../../../../../components/DesigneTokens/fonts.js";

const UserCredentialStyle = StyleSheet.create({
    body: {
        width: Screen_Size.width,
        height: 165 * (Screen_Size.width / 1080),
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '90%',
        height: '100%'
    },
    main: {
        flex: 1,
        width: '100%',
        gap: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Pop: {
        flex: 1,
        backgroundColor: Secondary_Colors.White70,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 460 * (Screen_Size.width / 1080),
        height: 100 * (Screen_Size.width / 1080),
        borderRadius: 15 * (Screen_Size.width / 1080),
    },
    PopContainer: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    PopTitle: {
        fontFamily: Geesh_Fonts.InriaRegular,
        fontSize: Text_Sizes.h5
    }
})


export default UserCredentialStyle;