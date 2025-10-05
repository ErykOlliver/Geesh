import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import { Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";

const ProfileStyle = StyleSheet.create({
    body: {
        flex: 1,
        gap: 10 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White90
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: Screen_Size.height
    },
    Header: {
        width: Screen_Size.width,
        height: 587 * (Screen_Size.width / 1080),
    },
    

    UserPAndUserNContent: {
        width: "90%",
        justifyContent: 'flex-start',
        paddingTop: 30,
        alignItems: 'center',
        height: "100%",
        flexDirection: 'row',
        gap: 20 * (Screen_Size.width / 1080)
    },

    PhotoPlace: {
        backgroundColor: Geesh_Secondary_Colors.White70,
        width: 100 * (Screen_Size.width / 1080),
        height: 100 * (Screen_Size.width / 1080),
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    NamePlace: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10 * (Screen_Size.width / 1080),
        justifyContent: 'center',
        alignItems: 'center',
    },
    NameTxT: {
        fontSize: 48 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.InriaBold
    },
    IDTxT: {
        fontSize: 24 * (Screen_Size.width / 1080),
        textTransform: 'uppercase',
        fontFamily: Geesh_Fonts.InriaRegular
    },
    UserCredentialPlace: {
        height: "30%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserCredentialContent: {
        width: "90%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10 * (Screen_Size.width / 1080),
    },

    ENPlace: {
        backgroundColor: Geesh_Secondary_Colors.White70,
        display: 'flex',
        flexDirection: 'row',
        width: 190,
        height: '70%',
        borderRadius: 5,
        gap: 8 * (Screen_Size.width / 1080),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ENTxT: {
        fontSize: 32 * (Screen_Size.width / 1080),
        fontFamily: Geesh_Fonts.InriaRegular
    },
    MainContent: {
        backgroundColor: Geesh_Secondary_Colors.White90,
        width: Screen_Size.width,
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    },
    MCContainer: {
        width: '90%',
        height: '69%',
        marginTop: 15 * (Screen_Size.width / 1080)
    },

    STTxT: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.InriaBold
    },

    OptionList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 45 * (Screen_Size.width / 1080),
        paddingBottom: 10 * (Screen_Size.width / 1080)
    }
})


export default ProfileStyle;