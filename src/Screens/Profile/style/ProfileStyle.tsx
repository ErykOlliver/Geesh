import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import { Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";

const ProfileStyle = StyleSheet.create({
    body: {
        flex: 1,
        gap: 10 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.White80
    },
    Header: {
        width: Screen_Size.width,
        height: 587 * (Screen_Size.width / 1080),
        backgroundColor: Geesh_Secondary_Colors.AuroraGreen,
    },
    MainContent: {
        backgroundColor: Geesh_Secondary_Colors.White80,
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
    }
})


export default ProfileStyle;