import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { AnimationContainer, Container, Description } from "./styles";
import LottieView from "lottie-react-native";
// import { Container } from './styles';
import * as Font from "expo-font";
const EmptyFavorites = () => {
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Container>
      <AnimationContainer>
        <LottieView
          style={{ width: 250, height: 250 }}
          source={require("../../assets/mortyCry.json")}
          autoPlay
        />
      </AnimationContainer>
      <Description style={{ fontFamily: "Audiowide-Regular" }}>
        Empty list! Add an episode to your favorites!
      </Description>
    </Container>
  );
};

export default EmptyFavorites;
