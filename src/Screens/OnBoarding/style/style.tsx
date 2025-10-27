import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";

const OnBoardingStyle = StyleSheet.create({
    body: {
        width: Screen_Size.width,
        height: Screen_Size.height,
        paddingHorizontal: 24,
    },

    container: {
        flex: 1,
        paddingTop: 100,
        paddingBottom: 45,
    },
    skipButton: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 30,
        right: 0
    },
    skipText: {
        fontSize: 16,
        textDecorationLine: "underline",
        color: '#737373',
    },
    slide: {
        justifyContent: 'center',
        gap: 8,
        width: 312
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Screen_Size.width * 0.8,
        height: Screen_Size.height * 0.35,
    },
    contentContainer: {
        alignItems: 'center',
        gap: 8
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        lineHeight: 33.6,
        fontFamily: Geesh_Fonts.PoppinsSemiBold,
        width: '90%'
    },
    description: {
        fontSize: 16,
        color: Geesh_Secondary_Colors.Gray,
        fontFamily: Geesh_Fonts.InterRegular,
        textAlign: 'center',
        lineHeight: 24,
        minHeight: 200
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    indicator: {
        width: 15,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#D4D4D4',
    },
    indicatorActive: {
        backgroundColor: '#00A3FF',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    backButton: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
    },
    backText: {
        fontSize: 16,
        fontFamily: Geesh_Fonts.PoppinsRegular,
        lineHeight: 24,
        color: 'black',
    },
    nextButton: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Geesh_Secondary_Colors.White,
        backgroundColor: '#00A3FF',
        alignItems: 'center',
    },

    slideControll: {
        display: 'flex',
        width: '100%',
        position: 'absolute',
        bottom: 50,
        gap: 8,
    },

    nextButtonFull: {
        flex: 2,
    },
    nextText: {
        fontSize: 16,
        fontFamily: Geesh_Fonts.PoppinsRegular,
        lineHeight: 24,
        color: '#FFFFFF',

    },
});

export default OnBoardingStyle;