import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../../../../components/DesigneTokens/metrics.js";
import { Geesh_Secondary_Colors } from "../../../../../../components/DesigneTokens/pallets.js";
import { Geesh_Fonts } from "../../../../../../components/DesigneTokens/fonts.js";

const UserPanelStyle = StyleSheet.create({
    body: {
        paddingTop: 50 * (Screen_Size.width / 1080),
        flex: 1,
        width: Screen_Size.width,
        height: 322 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White,
        justifyContent: 'center',
        borderEndEndRadius: 50 * (Screen_Size.width / 1080),
        alignItems: 'center'

    },
    container: {
        flex: 1,
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        width: '100%',
        gap: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatarPlace: {
        width: 230 * (Screen_Size.width / 1080),
        height: 230 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White70,
        borderRadius: 200 * (Screen_Size.width / 1080),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 200 * (Screen_Size.width / 1080)
    },
    userInfos: {
        flex: 1,
        gap: 10 * (Screen_Size.width / 1080)
    },
    userName: {
        fontFamily: Geesh_Fonts.InriaBold,
        fontSize: Text_Sizes.h2
    },
    userNamePlace: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    UID: {
        fontFamily: Geesh_Fonts.InriaLight,
        fontSize: Text_Sizes.h4

    }
})


export default UserPanelStyle;