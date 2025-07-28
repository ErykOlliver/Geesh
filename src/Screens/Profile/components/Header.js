import { View, Text} from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, LibrariesIcon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"

export default function Header() {
    return (
        <View style={ProfileStyle.Header}>
            <View style={ProfileStyle.UserPAndUserNPlace}>
                <View style={ProfileStyle.UserPAndUserNContent}>
                    <View style={ProfileStyle.PhotoPlace}>
                        <HugeiconsIcon icon={User03Icon} size={100 * (Screen_Size.width / 1080)} />
                    </View>
                    <View style={{
                        display: "flex", flexDirection: 'column'
                    }}>
                        <View style={ProfileStyle.NamePlace}>
                            <Text style={ProfileStyle.NameTxT}>User Name</Text>
                            <HugeiconsIcon icon={PencilEdit01Icon} />
                        </View>
                        <Text style={ProfileStyle.IDTxT}>User Id</Text>
                    </View>
                </View>
            </View>
{/*             <View style={ProfileStyle.UserCredentialPlace}>
                <View style={ProfileStyle.UserCredentialContent}>
                    <View style={ProfileStyle.ENPlace}>
                        <HugeiconsIcon icon={Mail01Icon} />
                        <Text style={ProfileStyle.ENTxT}>example@gmail.com</Text>
                    </View>
                    <View style={ProfileStyle.ENPlace}>
                        <HugeiconsIcon icon={SmartPhone01Icon} />
                        <Text style={ProfileStyle.ENTxT}>+55 71 9922-1199</Text>
                    </View>
                </View>
            </View> */}
        </View>
    )
}