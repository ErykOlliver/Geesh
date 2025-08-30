import { StyleSheet } from "react-native";
import { Text_Sizes, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const LoginStyle = StyleSheet.create({
  Body: {
    display: 'flex',
    justifyContent: 'space-between',
    height: Screen_Size.height,
    width: Screen_Size.width,
  },
  Superior: {
    width: '100%',
    marginTop: 80 * (height / 1920),
  },
  Meio: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50 * (height / 1920),
    width: '100%',
  },
  Inferior: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 230 * (height / 1920),
  },
  btn: {
    width: '90%',
    height: '30%',
    backgroundColor: Primmary_Colors.Azure,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 28,
  },
  btnGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  texto: {
    fontSize: Text_Sizes.h5,
    paddingTop: 15,
  },
  cor: {
    color: Primmary_Colors.Azure,
    fontWeight: "bold",
  },
  Titulo: {
    fontSize: 150 * (width / 1080),
    marginLeft: 20,
  },
  SubTitulo: {
    fontSize: Text_Sizes.h3,
    marginLeft: 25,
    marginRight: 60,
  },
  Subsubtitulo: {
    fontSize: Text_Sizes.h3,
    marginLeft: 25,
    marginRight: 60,
  },
  Linha: {
    width: '100%',
    height: 2,
    backgroundColor: Primmary_Colors.BluishWhite,
    marginTop: 75 * (height / 1920),
  },
  inputGroup: {
    height: '25%',
  },
  label: {
    marginLeft: '5%',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: Text_Sizes.h4,
  },
  inputWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 60,
    marginLeft: '5%',
    borderRadius: 4,
    backgroundColor: Secondary_Colors.White80,
    paddingLeft: 10,
    marginBottom: 20,
  },
  Title:{
    fontSize: 65 * (width / 1080),
    fontWeight: 'bold',
    padding: 10,
  },
  TextView:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: "white",
    color: 'gray',
  },
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
    height: 450 * (height / 1080),
    width:  1600 * (width / 1920),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#BD1E1E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '13%',
    width: '80%',
    borderRadius: 5,
    margin: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: Text_Sizes.h4,
  },
  CloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default LoginStyle;