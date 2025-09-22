import { useState } from "react"
import { ScrollView, View, Linking } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { InstagramIcon, LanguageSkillIcon, Moon02Icon, Notification01Icon, RecoveryMailIcon, ResetPasswordIcon, SmartPhone01Icon, WebDesignIcon } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle"
import OptionComponent from "../../../components/Reuse/Option/OptionComponent"
import SectionSettinsComponent from "./SectionSettings/SectionSettings"
import { useTranslation } from "react-i18next"


const data = [
    { label: 'English', value: 'en' },
    { label: 'Português', value: 'pt' }
]


export default function MainContent() {
    const { t, i18n } = useTranslation();

    const OpenInstagram = () => {
        Linking.openURL('https://www.instagram.com/teamgeesh/');
    }
    const OpenWebsite = () => {
        Linking.openURL('https://erykolliver.github.io/GeeshWebsite/');
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={ProfileStyle.MainContent}>
            <View style={ProfileStyle.MCContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <SectionSettinsComponent title={t("Configs")}>
                        <OptionComponent icon={<HugeiconsIcon icon={Moon02Icon} size={70 * (Screen_Size.width / 1080)} />} title={t("Modo Escuro")} type='toggle' />
                        <OptionComponent icon={<HugeiconsIcon icon={Notification01Icon} size={70 * (Screen_Size.width / 1080)} />} title={t("Notificações")} type="toggle" />
                        <OptionComponent icon={<HugeiconsIcon icon={LanguageSkillIcon} size={70 * (Screen_Size.width / 1080)} />} title={t("Idioma")} type="dropdown" data={data} function={(selected) => void i18n.changeLanguage(selected.value)} />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Segurança e privacidade")}>
                        <OptionComponent icon={<HugeiconsIcon icon={RecoveryMailIcon} size={70 * (Screen_Size.width / 1080)} />} title={t("Trocar Email")} type='default' />
                        <OptionComponent icon={<HugeiconsIcon icon={SmartPhone01Icon} size={70 * (Screen_Size.width / 1080)} />} title={t("Trocar numero de telefone")} type='default' />
                        <OptionComponent icon={<HugeiconsIcon icon={ResetPasswordIcon} size={70 * (Screen_Size.width / 1080)} />} title={t("Trocar senha")} type='default' />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Redes sociais")}>
                        <OptionComponent icon={<HugeiconsIcon icon={InstagramIcon} size={70 * (Screen_Size.width / 1080)} />} title="Instagram" type='default' function={() => OpenInstagram()} />
                        <OptionComponent icon={<HugeiconsIcon icon={WebDesignIcon} size={70 * (Screen_Size.width / 1080)} />} title={t("Site")} type='default' function={() => OpenWebsite()} />
                    </SectionSettinsComponent>
                    <SectionSettinsComponent title={t("Sobre")}>
                        <OptionComponent icon={<HugeiconsIcon icon={WebDesignIcon} size={70 * (Screen_Size.width / 1080)} />}  title={t("Versão")} info="1.0.1" type='information' />
                    </SectionSettinsComponent>
                </ScrollView >
            </View >
        </View >
    )
}