import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { AccelerationIcon, Analytics03FreeIcons, Analytics03Icon, ArrowDataTransferHorizontalIcon, SendToMobile02FreeIcons, Upload02Icon, Upload05Icon } from '@hugeicons/core-free-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style={styles.btn}>
        <View>
          <HugeiconsIcon icon={Upload05Icon} size={32} color={'white'} />
        </View>
        <View>
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    gap: 30,
    flexDirection: 'row', // Ícone à esquerda, texto à direita
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinhar tudo à esquerda
    backgroundColor: '#029FFC',
    padding: 15,
    borderRadius: 15,
    width: '40%' // ou 'auto' se quiser que se ajuste ao conteúdo
  },
});
