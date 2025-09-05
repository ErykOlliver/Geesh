import { StyleSheet } from "react-native";
import { Text_Sizes, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Dimensions } from "react-native";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets.js";

const { width, height } = Dimensions.get('screen');

const LoginStyle = StyleSheet.create({
  body: {
    flex: 1,
    gap: 1,
    backgroundColor: Geesh_Primmary_Colors.Azure
  },
  header: {
    width: Screen_Size.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Geesh_Secondary_Colors.White80,
    height: 587 * (Screen_Size.width / 1080),
  },
  header_container: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start'
    
  },
  main_content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Geesh_Secondary_Colors.White80,
    alignItems: 'center',
  },
  main_content_container: {
    flex: 1,
    paddingTop: 10 * (Screen_Size.width / 1080),
    justifyContent: 'space-between',
    alignItems: 'start',
    width: '90%'
  },
  form:{
    width: '100%',
    display: 'flex',
    gap: 15 * (Screen_Size.width / 1080)
  },
  form_button_place: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90 * (Screen_Size.width / 1080)
  },
  form_button: {
    width: '100%',
    height: 157 * (Screen_Size.width / 1080),
    borderRadius: 20 * (Screen_Size.width / 1080),
    borderWidth: 1,
    borderColor: Geesh_Secondary_Colors.White
  },
  button_text: {
    color: Geesh_Secondary_Colors.White80,
    fontWeight: 'bold',
    fontSize: 64 * (Screen_Size.width / 1080)
  },
  gradient_button: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20 * (Screen_Size.width / 1080)
  },
  forgot_your_pass: {
    fontSize: Text_Sizes.h4,
    padding: 10 * (Screen_Size.width / 1080)
  },
  recover_it_here: {
    color: Geesh_Primmary_Colors.Azure,
    fontWeight: "bold",
  },
  title: {
    fontSize: 120 * (width / 1080),
  },
  sub_title: {
    fontSize: Text_Sizes.h3,
  },
  input_label: {
    fontSize: Text_Sizes.h3,
    paddingVertical: 10 * (Screen_Size.width / 1080)
  },
  input_with_icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15 * (Screen_Size.width / 1080),
    backgroundColor: Geesh_Secondary_Colors.White80,
  },
  input_icon:{
    display: 'flex',
    width: 100 * (Screen_Size.width / 1080),
    height: 100 * (Screen_Size.width / 1080),
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 135 * (Screen_Size.width / 1080),
    color: 'gray',
    fontSize: Text_Sizes.h3
  },
  errorMsg: {
    color: 'red',
    fontWeight: Geesh_Fonts.InriaBold,
    fontSize: 16,
    marginLeft: '5%',
  },
})

export default LoginStyle;