import { StyleSheet } from "react-native";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import InriaBold, { Geesh_Fonts } from "../../../components/DesigneTokens/fonts";
import MainContent from "../components/MainContent";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";

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
    paddingBottom: 30 * (Screen_Size.width / 1080),
    width: "90%",
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    gap: 10 * (Screen_Size.width / 1080),
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
    width: '100%',
    height: 448 * (Screen_Size.width / 1080),
    paddingHorizontal: 100 * (Screen_Size.width / 1080),
    paddingVertical: 20 * (Screen_Size.width / 1080),
    gap: 42 * (Screen_Size.width / 1080)
  },

  Indicator: {
    borderWidth: 1,
    width: 50 * (Screen_Size.width / 1080),
    height: 50 * (Screen_Size.width / 1080),
    borderRadius: 100,
    borderColor: "black",
  },

  IndicatorGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100
  },

  ActiveButton: {
    alignItems: 'center',
    width: 650 * (Screen_Size.width / 1080),
    height: 150 * (Screen_Size.width / 1080),
    borderRadius: 15 * (Screen_Size.width / 1080),
    justifyContent: 'center',
  },

  ActiveBatteryGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 15 * (Screen_Size.width / 1080),
  },

  ActiveButtonText: {
    color: Geesh_Secondary_Colors.White,
    fontSize: Text_Sizes.h4,
    fontFamily: Geesh_Fonts.InriaBold
  },

  devices: {
    fontSize: Text_Sizes.h5,
    fontFamily: Geesh_Fonts.InriaLight
  },

  devicesMark: {
    color: Geesh_Primmary_Colors.Azure,
  },

  //#endregion

});