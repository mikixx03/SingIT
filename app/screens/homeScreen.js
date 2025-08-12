import * as React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity onPress={() => router.push("/screens/gameScreen")}>
        <Text>Zagraj!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
