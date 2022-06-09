import React from "react";
import { Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container, Page, PageNext, PagePrev } from "./styles";

const EpisodesMap = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Container>
      {prev ? (
        <Page title="<<" onPress={handlePrev}>
          <Ionicons name="chevron-back" size={30} color="#fff" />
        </Page>
      ) : (
        <Page title="<<" disabled={true}>
          <Ionicons name="chevron-back" size={30} color="#444" />
        </Page>
      )}
      {next ? (
        <Page title=">>" onPress={handleNext}>
          <Ionicons name="chevron-forward" size={30} color="#fff" />
        </Page>
      ) : (
        <Page title=">>" disabled={true}>
          <Ionicons name="chevron-forward" size={30} color="#444" />
        </Page>
      )}
    </Container>
  );
};

export default EpisodesMap;
