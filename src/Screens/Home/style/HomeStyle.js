import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Geesh_Secondary_Colors, Geesh_Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import InriaBold, { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import MainContent from "../components/MainContent";

export default StyleSheet.create({
  //#region Body
  Body: {
    display: 'flex',
    alignItems: 'center',
    width: Screen_Size.width,
    height: Screen_Size.height,
    backgroundColor: Geesh_Secondary_Colors.White80
  },
  //#endregion


  //#region Header
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 270 * (Screen_Size.width / 1080),
    width: Screen_Size.width,
    backgroundColor: Geesh_Secondary_Colors.White,
  },

  H_Content: {
    display: 'flex',
    width: '90%',
    paddingTop: 90 * (Screen_Size.width / 1080),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  HomeTitle: {
    fontFamily: Geesh_Fonts.PoppinsRegular,
    fontSize: Text_Sizes.h1,
  },
  //#endregion

  //#region MainContent

  Main_Content: {
    alignItems: 'center',
    paddingTop: 30 * (Screen_Size.width / 1080),
    height: Screen_Size.height,
    justifyContent: 'flex-start',
    width: Screen_Size.width,
    height: Screen_Size.height,
  },

  M_Content: {
    display: 'flex',
    width: "90%",
    height: '80%',
    alignItems: 'center',
  },

  //#endregion

  //#region Panel

  Panel: {
    display: 'flex',
    width: 920 * (Screen_Size.width / 1080),
    backgroundColor: Geesh_Secondary_Colors.White,
    paddingVertical: 15,
    paddingHorizontal: 20 * (Screen_Size.width / 1080),
    borderRadius: 25 * (Screen_Size.width / 1080),
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    alignItems: 'center',
    gap: 15 * (Screen_Size.width / 1080),
  },

  BatteryTitle: {
    fontSize: Text_Sizes.h4,
    fontFamily: Geesh_Fonts.InriaRegular
  },

  Battery: {
    width: 880 * (Screen_Size.width / 1080),
    height: 166 * (Screen_Size.width / 1080),
    alignItems: 'center',
    borderRadius: 15 * (Screen_Size.width / 1080),
    justifyContent: 'center',
  },

  BatteryInnerShadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 15 * (Screen_Size.width / 1080),
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 2.2,
    zIndex: 1

  },

  BatteryEnergy: {
    position: 'absolute',
    borderRadius: 15 * (Screen_Size.width / 1080),
    width: '80%',
    height: '100%'
  },

  BatteryInfoPlace: {
    display: 'flex',
    width: 880 * (Screen_Size.width / 1080),
    paddingVertical: 15 * (Screen_Size.width / 1080),
    gap: 4 * (Screen_Size.width / 1080),
  },

  BatteryInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  Info: {
    fontSize: Text_Sizes.h5,
    fontFamily: Geesh_Fonts.InriaLight
  },
  Status: {
    fontSize: Text_Sizes.h5,
    fontFamily: Geesh_Fonts.InriaLight
  },

  //#endregion

  //#region Active Place

  ActivePlace: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%'
  },

  Indicator: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#6EF768",
    marginBottom: 13,
    borderWidth: 2,
    borderColor: "black",
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.3)'
  },

  ActiveBatteryGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ActiveButton: {
    width: 275,
    height: 75,
    backgroundColor: Geesh_Primmary_Colors.Azure,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  ActiveButtonText: {
    color: "#fff",
    fontSize: 17,
  },
  devicesMark: {
    color: Geesh_Primmary_Colors.Azure,
    fontWeight: "bold",
  },
  devices: {
    fontSize: 12,
    paddingTop: 10,
  },

  //#endregion

});