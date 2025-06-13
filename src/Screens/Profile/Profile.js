import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import ProfileStyle from "./style/ProfileStyle"
import { LinearGradient } from "expo-linear-gradient"
import { Primmary_Colors, Secondary_Colors } from "../../components/DesigneTokens/pallets"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { StatusBar } from "expo-status-bar"
import { Screen_Size } from "../../components/DesigneTokens/metrics"
import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native"

export default function Profile() {
    return (
        <View style={ProfileStyle.body}>
            <LinearGradient colors={[Primmary_Colors.BluishWhite, Primmary_Colors.Azure]} style={ProfileStyle.background} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} />
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
                <View style={ProfileStyle.UserCredentialPlace}>
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
                </View>
            </View>
            <View style={ProfileStyle.MainContent}>
                <View style={ProfileStyle.MCContainer}>
                    <ScrollView style={{ width: '100%' }}>
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
                                        <TouchableOpacity style={ProfileStyle.GenericButton}>
                                            <View style={ProfileStyle.Ball}></View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}