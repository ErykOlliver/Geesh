import { StyleSheet } from "react-native";
import { Generic_Sizes, Text_Sizes } from "../../../DesigneTokens/metrics.js";

const BaseFilterStyle = StyleSheet.create({
    body: {
        width: Generic_Sizes.widths["w-4"],
        borderWidth: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default BaseFilterStyle;