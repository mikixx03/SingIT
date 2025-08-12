import React from "react";
import {
  Touchable,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import stylesSongCard from "../style";
import songCardBackground from "../assets/songCardBackground.webp";

//maybe one day we should add cover?
export default function SongCard({ title, artist }) {
  return (
    <View style={stylesSongCard.outerContainer}>
      <View style={stylesSongCard.innerContainer}>
        <ImageBackground
          source={songCardBackground}
          style={stylesSongCard.imageBackground}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={stylesSongCard.title}>{title}</Text>
            <Text style={stylesSongCard.artist}>{artist}</Text>
            <Text style={stylesSongCard.timeLeft}>Time left is (time)</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
