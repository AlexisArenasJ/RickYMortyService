import React from "react";
import { FlatList, View } from "react-native";

import {
  About,
  CardInfo,
  Container,
  ImageContainer,
  Info,
  InfoAbout,
  InfosContainer,
  InfoStatus,
  Title,
  TitleContainer,
} from "./styles";
import { Avatar } from "react-native-elements";


const CharactersMap = ({ characters = [] }) => {
  return (
    <Container>
      <View style={{ marginTop: 100 }} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        initialNumToRender={3} 
        maxToRenderPerBatch={2}
        renderItem={({ item }) => (
          <CardInfo>
            <ImageContainer>
              <Avatar
                rounded
                size={280}
                source={{ uri: item.image }}
              />
            </ImageContainer>
            <TitleContainer>
              <Title >
                Nombre: {item.name}
              </Title>
            </TitleContainer>
            <InfosContainer>
            <InfoStatus>
                  <Info >
                    Especie: {item.species}
                  </Info>
                </InfoStatus>
              <InfoAbout>
                <About>
                  Género: {item.gender}
                </About>
              </InfoAbout>

              <InfoAbout>
                <About >
                  Primera vez visto en: {item.origin.name}
                </About>
              </InfoAbout>
            </InfosContainer>
          </CardInfo>
        )}
      />
    </Container>
  );
};

export default CharactersMap;

