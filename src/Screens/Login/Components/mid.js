import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Primmary_Colors, Secondary_Colors } from '../../../components/DesigneTokens/pallets';
import styles from '../style/LoginStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { User03Icon, LockPasswordIcon } from '@hugeicons/core-free-icons';
import { auth } from '../../../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../style/LoginStyle';
import { LinearGradient } from 'expo-linear-gradient';

export default function Mid() {
  const [email, setMail] = useState('')
  const [password, setPass] = useState('')

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }
  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, "teste@teste.com", "123456")
      if (user) console.log('usuario criado')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF</Text>
          <View style={styles.inputWithIcon}>
            <HugeiconsIcon icon={User03Icon} width='30' height='30' color='gray' />
            <TextInput
              style={styles.input}
              placeholder='Ex: 123.456.789-10'
              value={email}
              onChangeText={setMail}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWithIcon}>
            <HugeiconsIcon icon={LockPasswordIcon} width='30' height='30' color='gray' />
            <TextInput
              style={styles.input}
              placeholder="Geesh access code"
              secureTextEntry={true}
              value={password}
              onChangeText={setPass}
            />
          </View>
        </View>
        <TouchableOpacity onPress={signUp} style={LoginStyle.btn}>
          <LinearGradient
            colors={[Primmary_Colors.Azure, Primmary_Colors.BluishWhite]}
            start={{ x: 0.5, y: -0.5 }}
            end={{ x: 0.5, y: 1 }}
            style={LoginStyle.btnGradient}
          >
            <Text style={LoginStyle.btnText}>Enter Geesh</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

