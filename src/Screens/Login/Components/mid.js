import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { LockPasswordIcon, Mail01Icon } from '@hugeicons/core-free-icons';
import { auth } from '../../../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../style/LoginStyle';
import { LinearGradient } from 'expo-linear-gradient';

export default function Mid() {
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
        setErrorMsg('');
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
    <View style={LoginStyle.Meio}>
      <Text style={LoginStyle.label}>Email</Text>
      <View
        style={[
          LoginStyle.inputWithIcon,
          emailError && { borderColor: 'red', borderWidth: 2 }
        ]}
      >
        <HugeiconsIcon icon={Mail01Icon} width='30' height='30' color='gray' />
        <TextInput
          style={LoginStyle.input}
          placeholder='user@example.com'
          value={email}
          onChangeText={setMail} 
        />       
      </View>
      <Text style={LoginStyle.label}>Password</Text>
      <View
        style={[
          LoginStyle.inputWithIcon,
          passwordError && { borderColor: 'red', borderWidth: 2 }
        ]}
      >
        <HugeiconsIcon icon={LockPasswordIcon} width='30' height='30' color='gray' />
        <TextInput
          style={LoginStyle.input}
          placeholder="Geesh access code"
          secureTextEntry={true}
          value={password}
          onChangeText={setPass}
        />
      </View>
      {errorMsg !== '' && (
        <Text style={LoginStyle.errorMsg}>{errorMsg}</Text>
      )}
      <View style={LoginStyle.Inferior}> 
      <TouchableOpacity onPress={signIn} style={LoginStyle.btn}>
        <LinearGradient
          colors={[Primmary_Colors.Azure, Primmary_Colors.BluishWhite]}
          start={{ x: 0.5, y: -0.5 }}
          end={{ x: 0.5, y: 1 }}
          style={LoginStyle.btnGradient}
        >
          <Text style={LoginStyle.btnText}>Enter Geesh</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={LoginStyle.texto}>
        Forgot your Password? <Text style={LoginStyle.cor}>Recover it here</Text>
      </Text>
      </View>
    </View>
  );
};

