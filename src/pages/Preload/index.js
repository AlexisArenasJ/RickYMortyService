import React from "react";
import { Image, View } from "react-native";
import * as Font from "expo-font";
import { AnimationContainer, Container, DevBy, DevByContainer } from "./styles";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Preload = () => {

useEffect(() => {
  setTimeout(() => {
    navigation.navigate('Tabs')
  }, 1500);
}, [])
  const navigation = useNavigation()
  const [loaded] = Font.useFonts({
    // "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
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
        <Image source={require("../../assets/emptyPortal.gif")} />
      </AnimationContainer>
      <DevByContainer>
        <DevBy style={{ fontFamily: "Poppins-Regular" }}>
          Developed by Caio Martins
        </DevBy>
      </DevByContainer>
    </Container>
  );
};

export default Preload;
