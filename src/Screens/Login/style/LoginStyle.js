import { StyleSheet } from "react-native";
import { Text_Sizes, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { Dimensions } from "react-native";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";

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
    marginTop: 80 * (width/1080),
  },
  Meio: {
    flex: 1,
    marginTop: 50 * (width / 1080),
    width: '100%',
  },
  Inferior: {
    flex: 1,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 325 * (width/1080),
  },
  btn: {
    width: '90%',
    height: 250 * (width/1080),
    backgroundColor: Primmary_Colors.Azure,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    marginTop: 400 * (width/1080),
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
    marginTop: 75 * (width/1080),
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
    marginBottom: 10 * (width / 1080),
  },
  TextView:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: "white",
    color: 'gray',
  },
  errorMsg: {
  color: 'red',
  fontWeight: Geesh_Fonts.InriaBold,
  fontSize: 16,
  marginLeft: '5%',
},
})

export default LoginStyle;