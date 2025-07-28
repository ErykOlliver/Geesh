import { useState } from "react"
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking, Switch, Button } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, InfantIcon, InformationCircleIcon, InformationSquareIcon, InstagramIcon, LanguageSkillIcon, LibrariesIcon, Mail01Icon, Moon02Icon, Notification01Icon, PencilEdit01Icon, PlayListAddFreeIcons, RecoveryMailIcon, ResetPasswordIcon, SmartPhone01Icon, SmartPhone02Icon, User02Icon, User03Icon, VersusIcon, ViewFreeIcons, WebDesignIcon } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"
import { version } from "react"
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets"
import ToggleComponent from "../../../components/Reuse/Toggle/ToggleComponent"
import OptionComponent from "../../../components/Reuse/Option/OptionComponent.tsx"
import DropDownComponent from "../../../components/Reuse/DropDown/DropDownComponent.tsx"

const data = [
    { label: 'English', value: 0 },
    { label: 'Português', value: 0 }
]


export default function MainContent() {
    const OpenInstagram = () => {
        Linking.openURL('https://www.google.com');
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={ProfileStyle.MainContent}>
            <View style={ProfileStyle.MCContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>Settings</Text>
                        <View style={ProfileStyle.OptionList}>
                            <OptionComponent icon={<HugeiconsIcon icon={Moon02Icon} size={30} />} title="Night Mode" type='toggle' />
                            <OptionComponent icon={<HugeiconsIcon icon={Notification01Icon} size={30} />} title="Notifications" type="toggle" />
                            <OptionComponent icon={<HugeiconsIcon icon={LanguageSkillIcon} size={30} />} title="Language" type="dropdown" data={data} />
                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>Security and privacy</Text>
                        <View style={ProfileStyle.OptionList}>
                            <OptionComponent icon={<HugeiconsIcon icon={RecoveryMailIcon} size={30} />} title="Change email" type='default' />
                            <OptionComponent icon={<HugeiconsIcon icon={SmartPhone01Icon} size={30} />} title="Change phone number" type='default' />
                            <OptionComponent icon={<HugeiconsIcon icon={ResetPasswordIcon} size={30} />} title="Change password" type='default' />
                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>Social</Text>
                        <View style={ProfileStyle.OptionList}>
                            <OptionComponent icon={<HugeiconsIcon icon={InstagramIcon} size={30} />} title="Instagram" type='default' />
                            <OptionComponent icon={<HugeiconsIcon icon={WebDesignIcon} size={30} />} title="Website" type='default' />

                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>About</Text>
                        <View style={ProfileStyle.OptionList}>
                            <OptionComponent icon={<HugeiconsIcon icon={WebDesignIcon} size={30} />} title="Version" info="1.0.0" type='information' />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}