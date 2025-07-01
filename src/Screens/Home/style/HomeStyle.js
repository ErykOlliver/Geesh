import { StyleSheet } from "react-native";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Secondary_Colors } from "../../../components/DesigneTokens/pallets";


export default StyleSheet.create({
    Main: {
        flex: 1,
        marginTop: 30, 
    },
    body: {
    flex: 1,
    alignItems: 'center',
    gap: 120,
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: "100%",
  },
  Titulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  btn: {
    width: 275,
    height: 75,
    backgroundColor: "#029FFC",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
  },
  cor: {
    color: "#029FFC",
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
    marginBottom: 20,
    borderWidth: 3,
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
    color: '#029FFC',
    fontWeight: 'bold',
  },
  bateria: {
    width: "95%",
    height: "30%",
    backgroundColor: "#d1d1d1",
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: 'center',
  },
  bateriaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
Header: {
    backgroundColor: Secondary_Colors.White,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: "9%",
    width: '100%',
    gap: "60%"
},
Title: {
    fontSize: 36,
}
});