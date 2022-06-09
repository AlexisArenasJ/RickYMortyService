import React, { useCallback } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import {
  About,
  ButtonFavorite,
  ButtonInfoEp,
  CardInfo,
  Container,
  FooterCard,
  HeaderCard,
  IconContainer,
  InfoAbout,
  InfosContainer,
  Title,
  TitleContainer,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateFavorite } from "../../store/actions";

const Episodes = ({ episodes = [] }) => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View style={{ marginTop: 100 }} />

        <FlatList
          data={episodes}
          keyExtractor={(item) => item.id}
          initialNumToRender={3} 
          maxToRenderPerBatch={2}
          renderItem={({ item }) => (
            <CardInfo>
              <HeaderCard>
                <TitleContainer>
                  <Title >
                    Episodio {item?.id}
                  </Title>
                </TitleContainer>
              </HeaderCard>
              <InfosContainer>
                <InfoAbout>
                  
                  <About>Nombre :{item.name}</About>
                </InfoAbout>
                <InfoAbout>
                  
                  <About>Al aire el: {item.air_date}</About>
                </InfoAbout>
                <ButtonInfoEp
                  onPress={() => {
                     navigation.navigate("Modal", { state: item });
                  }}
                >
                  <About>
                    Ver mas...
                  </About>
                </ButtonInfoEp>
              </InfosContainer>
              
            </CardInfo>
          )}
        />
      </Container>
    </>
  );
};

export default Episodes;
