import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import useSetLandscape from "../hooks/useSetOrientation";
import SongCard from "../components/SongCard";
import useSetTimer from "../hooks/useSetTimer"
import useGyroscope from "../hooks/useGyroscope";

export default function GameScreen() {
  useSetLandscape();
  
  const timeLeft = useSetTimer(20)
  const { x, y, z } = useGyroscope();

  const countdown = useSetTimer(5)
  let isStarting = true;
  if(countdown<1){
    // isStarting = false;
  }
  if (isStarting){
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#951d4b83",
        }}
      >
        <Text>{countdown}</Text>
        <Text>x: {x}</Text>
        <Text>y: {y}</Text>
        <Text>z: {z}</Text>
      </SafeAreaView>
    )
  } 
  else{
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#951d4b83",
        }}
      >
        <SongCard title="Bohemian Rhapsody" artist="Queen" timeLeft={timeLeft} />
      </SafeAreaView>
    );
  }
}
