import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CharactersMap from "../../components/CharactersMap";
import { Container, ContainerPagination } from "./styles";

const Characters = () => {
  const [characters, setCharacters] = useState();

  const getCharacter = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Container>      
      <CharactersMap characters={characters} />
    </Container>
  );
};

export default Characters;
