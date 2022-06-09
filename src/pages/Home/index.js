import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import * as Font from "expo-font";
import {
  ButtonNavigation,
  ButtonText,
  Container,
  ContainerInfo,
  Info,
  Sinopse,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();

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
      <ContainerInfo>
        <Sinopse >
         Integrantes {"\n"}
            Alexis Adrian Arenas Joaquin {"\n"}
            Axel Adan Gutierrez Serrano {"\n"}
            Alejandro Suarez Hernandez {"\n"}
            Edgar Hazel Ortega Torres {"\n"}
            Esteban Reyes Anguiano {"\n"}
        </Sinopse>

      
      </ContainerInfo>
      <ButtonNavigation onPress={() => navigation.navigate("Characters")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          Personajes
        </ButtonText>
      </ButtonNavigation>
      <ButtonNavigation onPress={() => navigation.navigate("Episodes")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          Episodios
        </ButtonText>
      </ButtonNavigation>
      {/* <ButtonNavigation onPress={() => navigation.navigate("Favorites")}>
        <ButtonText style={{ fontFamily: "Audiowide-Regular" }}>
          Favorites
        </ButtonText>
        <Ionicons name="chevron-forward" size={30} color="#2F3646" />
      </ButtonNavigation> */}
      <View style={{ marginBottom: "10%" }} />
    </Container>
  );
};

export default Home;

