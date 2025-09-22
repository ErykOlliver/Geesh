import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../../../../components/DesigneTokens/metrics";
import { Geesh_Secondary_Colors } from "../../../../../../components/DesigneTokens/pallets";
import { Geesh_Fonts } from "../../../../../../components/DesigneTokens/fonts";

const UserPanelStyle = StyleSheet.create({
    body: {
        paddingTop: 50 * (Screen_Size.width / 1080),
        flex: 1,
        width: Screen_Size.width,
        height: 322 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White,
        justifyContent: 'center',
        alignItems: 'center',

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
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatarPlace: {
        width: 230 * (Screen_Size.width / 1080),
        height: 230 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White70,
        borderRadius: 200 * (Screen_Size.width / 1080),
        justifyContent: 'center',
        borderWidth: 3 * (Screen_Size.width / 1080),
        borderColor: Geesh_Secondary_Colors.BlueSky,
        alignItems: 'center'
    },

    PopupPicture: {
        position: 'absolute',
        width: 70 * (Screen_Size.width / 1080),
        height: 70 * (Screen_Size.width / 1080),
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3 * (Screen_Size.width / 1080),
        borderColor: Geesh_Secondary_Colors.BlueSky,
        bottom: 5,
        right: -5,
        backgroundColor: Geesh_Secondary_Colors.White
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 200 * (Screen_Size.width / 1080)
    },
    userInfos: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10 * (Screen_Size.width / 1080)
    },
    userName: {
        fontFamily: Geesh_Fonts.PoppinsMedium,
        fontSize: Text_Sizes.h2
    },
    userNamePlace: {
        gap: 6 * (Screen_Size.width / 1080),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    email: {
        fontFamily: Geesh_Fonts.PoppinsLight,
        fontSize: Text_Sizes.h4

    }
})


export default UserPanelStyle;