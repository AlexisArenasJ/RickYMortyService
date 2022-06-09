import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  About,
  ButtonFavorite,
  ButtonInfoEp,
  CardInfo,
  CharactersButton,
  CharactersButtonTxt,
  Container,
  EpisodesButton,
  EpisodesButtonTxt,
  FooterCard,
  HeaderCard,
  IconContainer,
  InfoAbout,
  InfosContainer,
  TabCustom,
  Title,
  TitleContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as Localization from "expo-localization";

import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { updateFavorite } from "../../store/actions";
import EmptyFavorites from "../EmptyFavorites";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TabTop from "../../stacks/TabsTop";

const FavoritesMap = () => {
  const { episodes } = useSelector((state) => state.AllEpisodes);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Audiowide-Regular": require("../../assets/fonts/Audiowide-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  //.toString().padStart(3, "0")
  const removeFav = (item) => {
    dispatch(updateFavorite(item));
  };

  return (
    <Container>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyFavorites />}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 10 }}
        renderItem={({ item }) => (
          <>
            {item.favorite === true ? (
              <CardInfo>
                <HeaderCard>
                  <TitleContainer>
                    <Title style={{ fontFamily: "Audiowide-Regular" }}>
                      {item.id.toString().padStart(3, "0")}
                    </Title>
                  </TitleContainer>
                  <IconContainer>
                    <ButtonFavorite
                      onPress={() => {
                        removeFav(item.id);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="star-off"
                        size={24}
                        color="#D69D0D"
                      />
                    </ButtonFavorite>
                  </IconContainer>
                </HeaderCard>
                <InfosContainer>
                  <InfoAbout>
                    <About style={{ fontFamily: "Poppins-SemiBold" }}>
                      Name:
                    </About>
                    <About>{item.name}</About>
                  </InfoAbout>
                  <InfoAbout>
                    <About style={{ fontFamily: "Poppins-SemiBold" }}>
                      On air at:
                    </About>
                    <About>{item.air_date}</About>
                  </InfoAbout>
                </InfosContainer>
                <FooterCard>
                  <ButtonInfoEp
                    onPress={() => {
                      navigation.navigate("Modal", { state: item });
                    }}
                  >
                    <Ionicons
                      name="information-circle-outline"
                      size={35}
                      color="#fff"
                    />
                  </ButtonInfoEp>
                </FooterCard>
              </CardInfo>
            ) : (
              <EmptyFavorites />
            )}
          </>
        )}
      />
    </Container>
  );
};

export default FavoritesMap;
