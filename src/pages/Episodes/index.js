import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EpisodesMap from "../../components/EpisodesMap";
import Pagination from "../../components/Pagination";
import { fecthEpisodes } from "../../store/actions";
import { Container, ContainerPagination } from "./styles";

const Episodes = () => {
  // const [episodes, setEpisodes] = useState([]);
  const { episodes } = useSelector((state) => {
    return state.AllEpisodes;
  });
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});


  const getEpisode = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/episode")
      .then(({ data }) => {
        dispatch(fecthEpisodes(data.results));
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <Container>
        <EpisodesMap episodes={episodes} />
      </Container>
    </>
  );
};

export default Episodes;
