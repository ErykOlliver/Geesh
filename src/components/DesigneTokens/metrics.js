import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const Text_Sizes = {
    h1: 100 * (width / 1080),
    h2: 48 * (width / 1080),
    h3: 40 * (width / 1080),
    h4: 36 * (width / 1080),
    h5: 32 * (width / 1080),
    h6: 24 * (width / 1080),
    body: 16 * (width / 1080),
    small: 14 * (width / 1080),
    p: 12 * (width / 1080)
}

const Icon_Sizes = {
    IconXL: 48,
    IconL: 32,
    IconM: 24,
    IconS: 20
}

const Screen_Size = {
    width: width,
    height: height
}

export { Screen_Size, Icon_Sizes, Text_Sizes }