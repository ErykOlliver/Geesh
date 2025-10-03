import { useState } from "react"
import { ScrollView, View, Linking } from "react-native"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"
import OptionComponent from "../../../components/Reuse/Option/OptionComponent"
import SectionSettinsComponent from "./SectionSettings/SectionSettings"
import { useTranslation } from "react-i18next"
import { Bell, Instagram, Languages, LockOpen, Mails, Moon, PanelsTopLeft, Phone, RotateCcw, RotateCcwKey, SunMoon } from "lucide-react-native"
import { useTheme } from "../../../components/DesigneTokens/themeContext"


const data = [
    { label: 'English', value: 'en' },
    { label: 'Português', value: 'pt' }
]


export default function MainContent() {
    const { toggleTheme } = useTheme()
    const { t, i18n } = useTranslation();
    const { theme } = useTheme();

    const OpenInstagram = () => {
        Linking.openURL('https://www.instagram.com/teamgeesh/');
    }
    const OpenWebsite = () => {
        Linking.openURL('https://teamgeesh.github.io/geesh-website/');
    }
    return (
        <View style={[ProfileStyle.MainContent, {backgroundColor: theme.background}]}>
            <View style={ProfileStyle.MCContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <SectionSettinsComponent title={t("Configs")}>
                        <OptionComponent icon={<Moon size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Modo Escuro")} type='toggle' function={toggleTheme} />
                        <OptionComponent icon={<Bell size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Notificações")} type="toggle" />
                        <OptionComponent icon={<Languages size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Idioma")} type="dropdown" data={data} function={(selected) => void i18n.changeLanguage(selected.value)} />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Segurança e privacidade")}>
                        <OptionComponent icon={<Mails size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Trocar Email")} type='default' />
                        <OptionComponent icon={<Phone size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Trocar numero de telefone")} type='default' />
                        <OptionComponent icon={<LockOpen size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Trocar senha")} type='default' />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Redes sociais")}>
                        <OptionComponent icon={<Instagram size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title="Instagram" type='default' function={() => OpenInstagram()} />
                        <OptionComponent icon={<PanelsTopLeft size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={t("Site")} type='default' function={() => OpenWebsite()} />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Sobre")}>
                        <OptionComponent title={t("Versão")} info="1.0.2" type='information' />
                    </SectionSettinsComponent>
                </ScrollView >
            </View >
        </View >
    )
}