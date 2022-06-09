import { FlatList, Image, ScrollView, Text, View } from "react-native";
import {
  About,
  ButtonFavorite,
  ButtonInfoEp,
  ButtonWatchedEp,
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
import * as Font from "expo-font";

const EpisodeInfoCard = (id, name, date, favActive, onClickFav, infoEp) => {
  return (
    <CardInfo>
      <HeaderCard>
        <TitleContainer>
          <Title style={{ fontFamily: "Audiowide-Regular" }}>
            {id.toString().padStart(3, "0")}
          </Title>
        </TitleContainer>
        <IconContainer>
          <ButtonFavorite onPress={onClickFav}>
            <MaterialCommunityIcons
              name={!favActive ? "star-outline" : "star"}
              size={24}
              color={!favActive ? "#FFF" : "#D69D0D"}
            />
          </ButtonFavorite>
        </IconContainer>
      </HeaderCard>
      <InfosContainer>
        <InfoAbout>
          <About style={{ fontFamily: "Poppins-SemiBold" }}>Name:</About>
          <About>{name}</About>
        </InfoAbout>
        <InfoAbout>
          <About style={{ fontFamily: "Poppins-SemiBold" }}>On air at:</About>
          <About>{date}</About>
        </InfoAbout>
      </InfosContainer>
      <FooterCard>
        <ButtonInfoEp onPress={infoEp}>
          <Ionicons name="information-circle-outline" size={35} color="#fff" />
        </ButtonInfoEp>
      </FooterCard>
    </CardInfo>
  );
};

export default EpisodeInfoCard;
