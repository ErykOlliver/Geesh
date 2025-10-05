import { View, Text } from "react-native";
import { AlertTriangle, Ban, CheckCircle } from "lucide-react-native";
import ToastStyles from "./style/style";
import { Geesh_Secondary_Colors } from "../../DesigneTokens/pallets";
import { Icon_Size, Text_Sizes } from "../../DesigneTokens/metrics";
import { useEffect, useState } from "react";

type toasType = 'alert' | 'error' | 'sucess'

export type toastProps = {
    title: string;
    desc?: string;
    type: toasType;
    duration: number;
    onClose: () => void
}

const Toast = (props: toastProps) => {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (props.onClose) props.onClose();
        }, props.duration)
        return () => clearTimeout(timer)
    }, [props.duration, props.onClose])

    if (!visible) return null;

    const renderToast = () => {
        switch (props.type) {
            case "alert":
                return (
                    <View style={[ToastStyles.toast, { backgroundColor: Geesh_Secondary_Colors.EmberSoot, borderColor: Geesh_Secondary_Colors.FlameSigil }]}>
                        <View style={ToastStyles.header}>
                            <AlertTriangle color={Geesh_Secondary_Colors.White} size={Icon_Size.IconXL} />
                            <Text style={ToastStyles.title}>{props.title}</Text>
                        </View>
                        <Text style={ToastStyles.desc}>{props.desc}</Text>
                    </View>
                )
            case "error":
                return (
                    <View style={[ToastStyles.toast, { backgroundColor: Geesh_Secondary_Colors.CrimsonAbyss, borderColor: Geesh_Secondary_Colors.BloodOath }]}>
                        <View style={ToastStyles.header}>
                            <Ban color={Geesh_Secondary_Colors.White} size={Icon_Size.IconXL} />
                            <Text style={ToastStyles.title}>{props.title}</Text>
                        </View>
                        <Text style={ToastStyles.desc}>{props.desc}</Text>
                    </View>
                )
            case "sucess":
                return (
                    <View style={[ToastStyles.toast, { backgroundColor: Geesh_Secondary_Colors.AbyssalEmerald, borderColor: Geesh_Secondary_Colors.VerdantRite }]}>
                        <View style={ToastStyles.header}>
                            <CheckCircle color={Geesh_Secondary_Colors.White} size={Icon_Size.IconXL} />
                            <Text style={ToastStyles.title}>{props.title}</Text>
                        </View>
                    </View>
                )
        }
    }

    return (
        <>
            {renderToast()}
        </>
    )
};

export default Toast;
