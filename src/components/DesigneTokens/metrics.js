import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const Text_Sizes = {
    h1: 32,
    h2: 20,
    body: 16,
    small: 14,
    p: 12
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