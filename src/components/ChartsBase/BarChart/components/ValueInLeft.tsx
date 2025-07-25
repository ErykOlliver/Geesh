import { Text, View } from "react-native";

export default function ValueInLeft({ data }) {
    return (
        <View style={{ borderWidth: 1, width: '100%', height: '100%', justifyContent: 'space-between' }}>
            {data.map((value, index) => (
                <Text
                    key={index}
                    style={{ textAlign: 'center' }}
                >
                    {value}
                </Text>
            ))}
        </View>
    )
}