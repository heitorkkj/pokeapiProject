import { useRef } from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  height: 70%;
  padding: 1rem;

  margin: 1rem auto;
  box-shadow: 0 0 0.7rem 0 #aeaeae;
  outline: none;
  border: 0.1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const SearchBarElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 10vh;
  margin: 1rem auto;
  position: relative;
`;

const IconButton = styled.button`
  position: absolute;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background-image: url(https://cdn-icons-png.flaticon.com/512/528/528101.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SearchBar = ({ setUrl }) => {
  const pokemon = useRef();

  const handleSearch = (e) => {
    e.preventDefault;
    pokemon.current = e.target.value;
  };

  const handleSearchPokemon = (e) => {
    e.preventDefault;
    if(pokemon.current && pokemon.current >= '0'){
      setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon.current}`);
    }else{
      setUrl(`https://pokeapi.co/api/v2/pokemon`);
    }
  };

  return (
    <SearchBarElement>
      <Search
        type="search"
        placeholder="Digite o nome ou o id do pokemon"
        onChange={(e) => handleSearch(e)}
      ></Search>
      <IconButton
        onClick={(e) => {
          handleSearchPokemon(e);
        }}
      />
    </SearchBarElement>
  );
};

export default SearchBar;
