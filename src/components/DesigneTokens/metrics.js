import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const Geesh_Text_Size = {
    h1: 100 * (width / 1080),
    h2: 48 * (width / 1080),
    h3: 40 * (width / 1080),
    h4: 36 * (width / 1080),
    h5: 32 * (width / 1080),
    body: 16 * (width / 1080),
    small: 14 * (width / 1080),
    p: 12 * (width / 1080)
}

const Geesh_Icon_Size = {
    Icon5xl: 110 * (width / 1080),
    Icon4xl: 94 * (width / 1080),
    Icon3xl: 76 * (width / 1080),
    Icon2xl: 68 * (width / 1080),
    Icon1xl: 54 * (width / 1080),
    IconXL: 48 * (width / 1080),
    IconL: 32 * (width / 1080),
    IconM: 24 * (width / 1080),
    IconS: 20 * (width / 1080)
}

const Geesh_Screen_Size = {
    width: width,
    height: height
}

export { Geesh_Screen_Size as Screen_Size, Geesh_Icon_Size as Icon_Sizes, Geesh_Text_Size as Text_Sizes }