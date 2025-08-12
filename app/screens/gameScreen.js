import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import useSetLandscape from "../hooks/useSetLandscape";

export default function GameScreen() {
  useSetLandscape();
  return (
    <SafeAreaView>
      <Text>GameScreen</Text>
    </SafeAreaView>
  );
}
