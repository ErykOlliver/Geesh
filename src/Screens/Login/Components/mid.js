import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Secondary_Colors } from '../../../components/DesigneTokens/pallets';
import styles from '../style/LoginStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { User03Icon, LockPasswordIcon } from '@hugeicons/core-free-icons';

export default function Mid() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF</Text>
          <View style={styles.inputWithIcon}>
            <HugeiconsIcon icon={User03Icon} width='30' height='30' color='gray'/>
            <TextInput
              style={styles.input}
              placeholder='Ex: 123.456.789-10'
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWithIcon}>
            <HugeiconsIcon icon={LockPasswordIcon} width='30' height='30' color='gray'/>
            <TextInput
              style={styles.input}
              placeholder="Geesh access code"
              secureTextEntry={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

