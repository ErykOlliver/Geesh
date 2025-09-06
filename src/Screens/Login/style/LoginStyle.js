import { StyleSheet } from "react-native";
import { Text_Sizes, Screen_Size } from "../../../components/DesigneTokens/metrics.js";
import { Dimensions } from "react-native";
import { Geesh_Fonts } from "../../../components/DesigneTokens/fonts.js";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets.js";

const { width, height } = Dimensions.get('screen');

const LoginStyle = StyleSheet.create({
  body: {
    flex: 1,
    gap: 3,
    backgroundColor: Geesh_Primmary_Colors.Azure
  },
  header: {
    width: Screen_Size.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Geesh_Secondary_Colors.White80,
  },
  header_container: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 100 * (Screen_Size.width / 1080),
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
    fontSize: 64 * (Screen_Size.width / 1080),
    fontFamily: Geesh_Fonts.InriaBold,
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
    padding: 10 * (Screen_Size.width / 1080),
    fontFamily: Geesh_Fonts.InriaRegular,
  },
  recover_it_here: {
    color: Geesh_Primmary_Colors.Azure,
    fontFamily: Geesh_Fonts.InriaRegular,
  },
  title: {
    fontSize: 120 * (width / 1080),
    fontFamily: Geesh_Fonts.PoppinsRegular
  },
  sub_title: {
    fontSize: Text_Sizes.h4,
    fontFamily: Geesh_Fonts.PoppinsLight
  },
  input_label: {
    fontSize: Text_Sizes.h3,
    paddingVertical: 10 * (Screen_Size.width / 1080),
    fontFamily: Geesh_Fonts.PoppinsLight
    
  },
  input_with_icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15 * (Screen_Size.width / 1080),
    backgroundColor: Geesh_Secondary_Colors.White70,
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
    fontSize: Text_Sizes.h3,
    fontFamily: Geesh_Fonts.PoppinsLight
  },
  errorMsg: {
    color: 'red',
    fontWeight: Geesh_Fonts.InriaBold,
    fontSize: 16,
    marginLeft: '5%',
  },
})

export default LoginStyle;