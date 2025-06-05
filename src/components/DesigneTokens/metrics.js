import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const Text_Sizes = {
    h1: 32,
    h2: 20,
    body: 16,
    small: 14,
    p: 12
}

export const Icon_Sizes = {
    IconXL: 48,
    IconL: 32,
    IconM: 24,
    IconS: 20
}

export const Screen_Size = {
    width: width,
    height: height
}