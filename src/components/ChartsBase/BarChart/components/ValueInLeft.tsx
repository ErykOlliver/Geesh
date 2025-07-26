import { Text, View } from "react-native";
import { Geesh_Fonts } from "../../../DesigneTokens/fonts.js";
import { Text_Sizes } from "../../../DesigneTokens/metrics.js";

export default function ValueInLeft({ data }) {
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'space-between' }}>
            {data.map((value, index) => (
                <Text
                    key={index}
                    style={{ textAlign: 'center', fontFamily: Geesh_Fonts.InriaRegular, fontSize: Text_Sizes.h5 }}
                >
                    {value}
                </Text>
            ))}
        </View>
    )
}