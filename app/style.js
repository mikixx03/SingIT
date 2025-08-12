import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const landscapeWidth = Math.max(width, height);
const landscapeHeight = Math.min(width, height);
const borderWidth = 20;
const outerRadius = 26;

const stylesSongCard = StyleSheet.create({
  outerContainer: {
    height: landscapeHeight * 0.9,
    width: landscapeWidth * 0.9,
    borderRadius: outerRadius,
    borderWidth: borderWidth,
    borderColor: "#fff",
    borderStyle: "solid",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  artist: {
    fontSize: 20,
    color: "#c0c0c0",
    marginBottom: 20,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  timeLeft: {
    fontSize: 16,
    color: "#eee",
    fontStyle: "italic",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default stylesSongCard;
