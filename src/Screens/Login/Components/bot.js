import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, StyleSheet,Platform, Button } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Alert02Icon } from '@hugeicons/core-free-icons';
import LoginStyle from '../style/LoginStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { BlurView } from 'expo-blur';
import { signUp } from '../Components/mid';

export default function Bot() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View style={LoginStyle.Inferior}>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >

        <View style={LoginStyle.centeredView}>
          <BlurView intensity={4} tint="light" experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined} style={StyleSheet.absoluteFill} />
          <View style={LoginStyle.modalView}>
            <View style={LoginStyle.AlertView}>
              <HugeiconsIcon icon={Alert02Icon} color="#fff" height="50%" width="50%" />
            </View>
            <View style={LoginStyle.TextView}>
              <Text style={LoginStyle.Title}>Account not found</Text>
              <Text style={LoginStyle.modalText}>
                We couldn't find an account with the Provided CPF.
              </Text>
              <Text style={LoginStyle.modalText}>
                Please check your information. If the issue persists, contact our support team.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={LoginStyle.buttonClose}
            >
              <Text style={LoginStyle.CloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}


    </View>
  );
}

