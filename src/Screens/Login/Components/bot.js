import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, StyleSheet,Platform } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Alert02Icon } from '@hugeicons/core-free-icons';
import LoginStyle from '../style/LoginStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { BlurView } from 'expo-blur';

export default function Bot() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={LoginStyle.Inferior}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={LoginStyle.btn}>
        <LinearGradient
          colors={[Primmary_Colors.Azure, Primmary_Colors.BluishWhite]}
          start={{ x: 0.5, y: -0.5 }}
          end={{ x: 0.5, y: 1 }}
          style={LoginStyle.btnGradient}
        >
          <Text style={LoginStyle.btnText}>Enter Geesh</Text>
        </LinearGradient>
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <BlurView intensity={4} tint="light" experimentalBlurMethod={Platform.OS === 'android' ? 'dimezisBlurView' : undefined} style={StyleSheet.absoluteFill} />
          <View style={styles.modalView}>
            <View style={styles.AlertView}>
              <HugeiconsIcon icon={Alert02Icon} color="#fff" height="50%" width="50%" />
            </View>
            <View style={LoginStyle.TextView}>
              <Text style={LoginStyle.Title}>Account not found</Text>
              <Text style={styles.modalText}>
                We couldn't find an account with the Provided CPF.
                Please check your information. If the issue persists, contact our support team.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.buttonClose}
            >
              <Text style={styles.CloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={LoginStyle.texto}>
        Forgot your Password? <Text style={LoginStyle.cor}>Recover it here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  AlertView: {
    backgroundColor: '#BD1E1E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  modalView: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 15,
    height: '38%',
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#BD1E1E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '13%',
    width: '80%',
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  CloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
