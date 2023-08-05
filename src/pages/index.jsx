import {fetcher} from "@/service/api.service";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSwr from "swr";
import MenuType from "./components/menu";
import SearchBar from "./components/search";
import PokeDex from "./components/pokedex";

const Main = styled.main`
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: row;
`;

const Section = styled.section`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.header`
  width: 20%;
  max-width: 20rem;
`;


const Home = () => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const { data, error, mutate, isValidating } = useSwr(url, fetcher, {
    revalidateOnFocus: false,
  });

  const [pokeImages, setPokeImages] = useState([]);

  useEffect(() => {
    const fetchPokemonsImages = async () => {
      if (!data || !data.results) return;

      const requests = data.results.map((element) => fetcher(element.url));
      const responses = await Promise.all(requests);

      setPokeImages(responses);
    };
    fetchPokemonsImages();
  }, [data]);

  return (
    <Main>
      <Header>
        <MenuType />
      </Header>
      <Section>
        <SearchBar setUrl={setUrl}/>
        <PokeDex data={data} pokeImages={pokeImages} setUrl={setUrl}/>
      </Section>
    </Main>
  );
};

export default Home;
