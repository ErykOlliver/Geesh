import { StyleSheet } from "react-native";
import { Text_Sizes,Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Primmary_Colors,Secondary_Colors } from "../../../components/DesigneTokens/pallets";

const LoginStyle = StyleSheet.create({
    Body: {
    flex: 1,
    height: Screen_Size.height,
    width: Screen_Size.width,
    },
    Superior: {
        display: 'flex',
        height: '25%',
        width: '100%',
        marginTop: 40,
    },
    Meio: {
        display: 'flex',
        height: '50%',
        width: '100%',
        marginTop: 20,
    },
    Inferior: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
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
    texto: {
    fontSize: 12,
    paddingTop: 15,
  },
    cor: {
    color: Primmary_Colors.Azure,
    fontWeight: "bold",
  },
    Titulo: {
        fontSize: 50,
        marginLeft: 20,
    },
    SubTitulo: {
        fontSize: Text_Sizes.h3,
        marginLeft: 25,
        marginRight: 60,
        marginTop: 10,
    },
    Linha: {
        width: '100%',
        height: 2,
        backgroundColor: Primmary_Colors.BluishWhite,
        marginTop: 20,
    },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginLeft: '5%',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 14,
  },
  inputWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 4,
    backgroundColor: Secondary_Colors.White80,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: "white",
  },

})

export default LoginStyle;