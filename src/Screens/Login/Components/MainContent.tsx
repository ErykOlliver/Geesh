import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../style/LoginStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon_Size, Screen_Size } from '../../../components/DesigneTokens/metrics';
import { Geesh_Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { Lock, Mail } from 'lucide-react-native';
import { useTheme } from '../../../components/DesigneTokens/themeContext';

export default function MainContent({ navigation }) {
    const [email, setMail] = useState('')
    const [password, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState<string | any>('')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const signIn = async () => {
        setEmailError(false);
        setPasswordError(false);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                navigation.replace('Tabs');
            }
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                setErrorMsg('Email inválido');
                setEmailError(true);
            } else if (error.code === 'auth/missing-password') {
                setErrorMsg('Senha inválida');
                setPasswordError(true);
            } else if (error.code === 'auth/invalid-credential') {
                setErrorMsg('Usuário não encontrado');
                setEmailError(true);
                setPasswordError(true);
            } else {
                setErrorMsg('Erro ao autenticar');
                setEmailError(true);
                setPasswordError(true);
            }
        }
    }
    const { theme } = useTheme();
    return (
        <View style={[LoginStyle.main_content, { backgroundColor: theme.background }]}>
            <View style={LoginStyle.main_content_container}>
                <View style={LoginStyle.form}>
                    {/* Email */}
                    <Text style={[LoginStyle.input_label, { color: theme.text }]}>Email</Text>
                    <View style={[LoginStyle.input_with_icon, { backgroundColor: theme.inputBG, borderColor: theme.inputBorder }, emailError && { borderColor: theme.inputError }]}>
                        <View style={LoginStyle.input_icon}>
                            <Mail size={Icon_Size.Icon6xl} color={emailError ? theme.inputError : theme.placeholder} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        </View>
                        <TextInput style={[LoginStyle.input, { color: theme.inputText }]} placeholder='user@example.com' placeholderTextColor={emailError ? theme.inputError : theme.placeholder} value={email} onChangeText={setMail} />
                    </View>

                    {/* Password */}
                    <Text style={[LoginStyle.input_label, { color: theme.text }]}>Password</Text>
                    <View style={[LoginStyle.input_with_icon, { backgroundColor: theme.inputBG, borderColor: theme.inputBorder }, passwordError && { borderColor: theme.inputError }]}>
                        <View style={LoginStyle.input_icon}>
                            <Lock size={Icon_Size.Icon6xl} color={passwordError ? theme.inputError : theme.placeholder} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        </View>
                        <TextInput style={[LoginStyle.input, { color: theme.inputText }]} placeholder="Geesh access code" placeholderTextColor={passwordError ? theme.inputError : theme.placeholder} secureTextEntry={true} value={password} onChangeText={setPass} />
                    </View>

                    {/* Error Message */}
                    {errorMsg !== '' && (
                        <Text style={LoginStyle.errorMsg}>{errorMsg}</Text>
                    )}
                </View>
                <View style={LoginStyle.form_button_place}>
                    <TouchableOpacity onPress={signIn} style={LoginStyle.form_button}>
                        <LinearGradient colors={[Geesh_Primmary_Colors.Azure, Geesh_Primmary_Colors.BluishWhite]} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={LoginStyle.gradient_button}>
                            <Text style={LoginStyle.button_text}>Enter Geesh</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={[LoginStyle.forgot_your_pass, { color: theme.text }]}>
                        Forgot your Password? <Text style={LoginStyle.recover_it_here}>Recover it here</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

