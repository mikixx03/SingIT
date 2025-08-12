import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import useSetLandscape from "../hooks/useSetOrientation";
import SongCard from "../components/SongCard";

export default function GameScreen() {
  useSetLandscape();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#951d4b83",
      }}
    >
      <SongCard title="Bohemian Rhapsody" artist="Queen" />
    </SafeAreaView>
  );
}
