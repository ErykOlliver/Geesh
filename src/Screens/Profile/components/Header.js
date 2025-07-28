import { View, Text } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, LibrariesIcon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"
import UserPanel from "./Header/UserPanel/UserPanel.tsx"
import UserCredential from "./Header/UserCredential/UserCredential.tsx"
const Avatar = require('../../../img/others/ImgsToTestes/user.jpeg')

export default function Header() {
    return (
        <View style={ProfileStyle.Header}>
            <UserPanel userName="William Nascimento" UID={645623} Avatar={Avatar} />
            <UserCredential userPhone={55122334455} userEmail="WilliamChefao@gmail.com" />
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