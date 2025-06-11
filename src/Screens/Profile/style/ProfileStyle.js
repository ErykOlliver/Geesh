import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Secondary_Colors } from "../../../components/DesigneTokens/pallets";

const ProfileStyle = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
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
        backgroundColor: Secondary_Colors.White90,
        width: Screen_Size.width,
        height: "28%"
    },
    UserPAndUserNPlace: {
        backgroundColor: 'blue',
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center'
    },

    UserPAndUserNContent: {
        backgroundColor: 'cyan',
        width: "90%",
        height: "100%"
    },
    UserCredentialPlace: {
        backgroundColor: 'red',
        height: "30%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    UserCredentialContent: {
        backgroundColor: 'green',
        width: "90%",
        height: "100%"
    },
    MainContent: {
        backgroundColor: Secondary_Colors.White90,
        width: Screen_Size.width,
        height: "72%"

    }
})

export default ProfileStyle;