import { useState } from "react"
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking, Switch, Button } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, InfantIcon, InformationCircleIcon, InformationSquareIcon, InstagramIcon, LanguageSkillIcon, LibrariesIcon, Mail01Icon, Moon02Icon, Notification01Icon, PencilEdit01Icon, PlayListAddFreeIcons, RecoveryMailIcon, ResetPasswordIcon, SmartPhone01Icon, SmartPhone02Icon, User02Icon, User03Icon, VersusIcon, ViewFreeIcons, WebDesignIcon } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"
import { version } from "react"
import DropdownComponent from "../../../components/Reuse/DropDown/Dropdown"
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets"
import ToggleComponent from "../../../components/Reuse/Toggle/ToggleComponent"

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
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={Moon02Icon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Night Theme</Text>
                                    </View>
                                    <ToggleComponent />
                                </View>
                            </View>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={Notification01Icon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Notifications</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: Secondary_Colors.White70, true: Secondary_Colors.White70 }}
                                        thumbColor={isEnabled ? Primmary_Colors.BluishWhite : Primmary_Colors.Azure}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                        style={{}}
                                    />
                                </View>
                            </View>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={LanguageSkillIcon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Language</Text>
                                    </View>
                                    <DropdownComponent />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>Security and privacy</Text>
                        <View style={ProfileStyle.OptionList}>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={RecoveryMailIcon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Change email</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={SmartPhone01Icon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Change phone number</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={ResetPasswordIcon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Change password</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>Social</Text>
                        <View style={ProfileStyle.OptionList}>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={InstagramIcon} size={30} />
                                </View>
                                <TouchableOpacity style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Instagram</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={ProfileStyle.Option}>
                                <View style={ProfileStyle.IconPlace}>
                                    <HugeiconsIcon icon={WebDesignIcon} size={30} />
                                </View>
                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Website</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={ProfileStyle.SettingsPlace}>
                        <Text style={ProfileStyle.STTxT}>About</Text>
                        <View style={ProfileStyle.OptionList}>
                            <View style={ProfileStyle.Option}>

                                <View style={ProfileStyle.GBAndOPTxT}>
                                    <View style={ProfileStyle.OpTLabel}>
                                        <Text style={ProfileStyle.OptionTxT}>Version</Text>
                                    </View>
                                    <Text>1.0.0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}