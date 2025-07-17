import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Secondary_Colors, Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import InriaBold, { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";

export default StyleSheet.create({
  //#region Body
  Body: {
    alignItems: 'center',
    width: Screen_Size.width,
    height: Screen_Size.height,
  },
  //#endregion


  //#region Header
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#00000",
    shadowOpacity: 25,
    elevation: 1.5,
    width: Screen_Size.width,
    height: 170 * (Screen_Size.width / 1080),
    backgroundColor: Secondary_Colors.White,
  },

  Content: {
    display: 'flex',
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
  },

  Title: {
    fontFamily: Geesh_Fonts.PoppinsRegular,
    fontSize: Text_Sizes.h1,
  },
  //#endregion

  Titulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
  },
  btnGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn: {
    width: 275,
    height: 75,
    backgroundColor: Primmary_Colors.Azure,
    borderRadius: 10,
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
    fontSize: 17,
  },
  cor: {
    color: Primmary_Colors.Azure,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 12,
    paddingTop: 10,
  },
  circulo: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#6EF768",
    marginBottom: 13,
    borderWidth: 2,
    borderColor: "black",
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)'
  },
  Painel: {
    justifyContent: 'center',
    width: "93%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowRadius: 6,
    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    marginLeft: 7,
    marginRight: 7,
  },
  status: {
    fontSize: 16,
    color: '#222',
  },
  valor: {
    fontSize: 16,
    color: Primmary_Colors.Azure,
    fontWeight: 'bold',
  },
  bateria: {
    width: "95%",
    height: "30%",
    backgroundColor: "#d1d1d1",
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  bateriaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});