import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { LockKeyFreeIcons, Mail01Icon } from '@hugeicons/core-free-icons';
import { auth } from '../../../../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../style/LoginStyle.js';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon_Size } from '../../../components/DesigneTokens/metrics.js';
import { Geesh_Primmary_Colors } from '../../../components/DesigneTokens/pallets.js';

export default function MainContent({ navigation }) {
    const [email, setMail] = useState('')
    const [password, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const signIn = async () => {
        setEmailError(false);
        setPasswordError(false);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                setErrorMsg('usuario logado');
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
            console.log(error);
        }
    }
    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, "teste@teste.com", "123456")
            if (user) {
                console.log('usuario criado')
                setErrorMsg('')
            } else {
                setErrorMsg(errors?.password?.message || 'Erro ao criar usuário')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={LoginStyle.main_content}>
            <View style={LoginStyle.main_content_container}>
                <View style={LoginStyle.form}>
                    <Text style={LoginStyle.input_label}>Email</Text>
                    <View style={[LoginStyle.input_with_icon, emailError && { borderColor: 'red', borderWidth: 2 }]}>
                        <View style={LoginStyle.input_icon}>
                            <HugeiconsIcon icon={Mail01Icon} size={Icon_Size.Icon6xl} color='gray' />
                        </View>
                        <TextInput style={LoginStyle.input} placeholder='user@example.com' value={email} onChangeText={setMail} />
                    </View>
                    <Text style={LoginStyle.input_label}>Password</Text>
                    <View style={[LoginStyle.input_with_icon, passwordError && { borderColor: 'red', borderWidth: 2 }]}>
                        <View style={LoginStyle.input_icon}>
                            <HugeiconsIcon icon={LockKeyFreeIcons} size={Icon_Size.Icon6xl} color='gray' />
                        </View>
                        <TextInput style={LoginStyle.input} placeholder="Geesh access code" secureTextEntry={true} value={password} onChangeText={setPass} />
                    </View>
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
                    <Text style={LoginStyle.forgot_your_pass}>
                        Forgot your Password? <Text style={LoginStyle.recover_it_here}>Recover it here</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

