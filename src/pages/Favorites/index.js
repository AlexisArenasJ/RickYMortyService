import React from "react";
import { View, Text } from "react-native";
import FavoritesMap from "../../components/FavoritesMap";
import { Container } from "./styles";

const Favorites = () => {
  return (
    <Container>
      <FavoritesMap />
    </Container>
  );
};

export default Favorites;
