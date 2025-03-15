import { StyleSheet } from "react-native";

import { width, height } from "@utils";

const mainStyles = StyleSheet.create({
  //---- BACKGROUND COLOR ----\\
  bgc_darkSpace: {
    backgroundColor: "#0B0C10",
  },
  bgc_interstellarGases: {
    backgroundColor: "#5D3FD3",
  },
  bgc_lunarSilver: {
    backgroundColor: "#C0C0C0",
  },
  bgc_solarOrange: {
    backgroundColor: "#FF4500",
  },
  //---- BUTTON ----\\
  buttonBase: {
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 10,
    width: width * 0.9,
  },
  buttonPrimary: {
    backgroundColor: "#4682B4",
    borderColor: "#5D3FD3",
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonSecondary: {
    borderColor: "#5D3FD3",
    borderStyle: "solid",
    borderWidth: 2,
  },
  buttonTertiary: {},
  buttonTextHomeReady: {
    color: "#fff",
  },
  buttonHomeLatestScore: {
    backgroundColor: "#C0C0C0",
    borderRadius: 25,
    elevation: 5,
    padding: 10,
    position: "absolute",
    right: -20,
    top: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 'auto',
  },
  buttonLeaderboard: {
    justifyContent: "space-between",
    padding: 10,
    width: width * 0.95,
  },
  //---- FONT COLOR ----\\
  fc_darkSpace: {
    color: "#0B0C10",
  },
  fc_interstellarGases: {
    color: "#5D3FD3",
  },
  fc_lunarSilver: {
    color: "#C0C0C0",
  },
  fc_solarOrange: {
    color: "#FF4500",
  },
  //---- FONT SIZE ----\\
  fs_14: {
    fontSize: 14,
  },
  fs_16: {
    fontSize: 16,
  },
  fs_18: {
    fontSize: 18,
  },
  fs_20: {
    fontSize: 20,
  },
  fs_35: {
    fontSize: 35,
  },
  //---- FONT STYLE ----\\
  fs_italic: {
    fontStyle: "italic",
  },
  //---- IMAGE ----\\
  imageBase: {
    height: "100%",
    resizeMode: "contain",
    width: "100%",
  },
  imageLogo: {
    height: height * 0.25,
    width: width * 0.9,
  },
  //---- SCREEN ----\\
  screenBase: {
    alignItems: "center",
    justifyContent: "center",
  },
  screenFull: {
    flex: 1,
    gap: 10,
    height: "100%",
    width: "100%",
  },
  screenHomeHeader: {
    height: height * 0.2,
    paddingHorizontal: 2,
    width: "100%",
  },
  screenProgressBar: {
    gap: 10,
    height: 40,
    marginVertical: 10,
    maxWidth: width * 0.95,
    width: width * 0.9,
  },
  screenProgressBarAnimated: {
    height: 20,
    maxWidth: width * 0.95,
    width: "0%",
  },
  screenHome: {
    justifyContent: "space-around",
  },
  screenHomeLatestScore: {
    backgroundColor: "#1B1F3B", //
    borderColor: "#5D3FD3", //
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: "column",
    gap: 5,
    height: height * 0.2,
    paddinhg: 20,
    position: "relative",
    width: width * 0.85,
  },
  screenLeaderboard: {
    justifyContent: "space-around",
  },
  screenLeaderboardHeader: {},
  screenLeaderboardContent: {},
  //---- TEXT ----\\
  textLoading: {
    color: "#FF4500",
    fontFamily: "roboto-regular",
    fontSize: 18,
    fontStyle: "italic",
  },
  TextprogressBar: {
    color: "#FF4500",
    fontFamily: "montserrat-regular",
    fontSize: 14,
  },
  textHomeName: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 35,
  },
  textHomeVersion: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 20,
  },
  textHomeLatestScoreTitle: {
    color: "white",
    fontFamily: "roboto-regular",
    fontSize: 22,
  },
  textHomeLatestScoreResult: {
    color: "white",    
    fontSize: 15,
  },
  textHomeLatestScoreResult: {
    color: "white",    
    fontSize: 15,
  },
  textHomeLatestScoreResult: {
    color: "white",    
    fontSize: 15,
  },
  textLeaderboardTitle: {
    fontSize: 24, 
    fontFamily: "roboto-regular",
    fontWeight: "bold",
  },
  textLeaderboardRank: {
    fontSize: 18,
    fontWeight: "bold",
    width: 30,
  },
  textLeaderboardUser: {
    flex: 1,
    fontSize: 18,
  },
  textLeaderboardScore: {
    fontSize: 18,
    fontWeight: "bold",
  },
  //---- ----\\
});

export default mainStyles;
