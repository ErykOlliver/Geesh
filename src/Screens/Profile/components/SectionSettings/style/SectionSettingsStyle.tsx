import { StyleSheet } from "react-native";
import { Geesh_Fonts } from "../../../../../components/DesigneTokens/fonts";
import { Screen_Size, Text_Sizes } from "../../../../../components/DesigneTokens/metrics";

const SectionSettingsStyle = StyleSheet.create({
    body: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: 45 * (Screen_Size.width / 1080),
        paddingBottom: 10 * (Screen_Size.width / 1080),
    },

    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 15 * (Screen_Size.width / 1080),

    },
    title: {
        fontSize: Text_Sizes.h3,
        fontFamily: Geesh_Fonts.PoppinsMedium,
    }

})

export default SectionSettingsStyle;