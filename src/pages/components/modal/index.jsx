import { getPokemonById } from "@/service/api.service";
import React, { useEffect, useState } from "react";
import { FaMarkdown, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import icons from "@/utils/typeIcons";

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const ModalHeader = styled.div`
  width: 2rem;
  height: 2rem;

  position: absolute;
  right: 30%;
  z-index: 999999;

  cursor: pointer;
  transition: all 0.4s;
  opacity: 0.5;

  background-image: url(https://cdn-icons-png.flaticon.com/512/528/528101.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }
`;
const ModalContent = styled.div`
  width: 45%;
  height: 90%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  border-radius: 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PokeId = styled.h1`
  position: absolute;
  align-self: center;
  top: 30%;
  z-index: 0;

  font-size: 3rem;
  text-transform: capitalize;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: rgb(212, 212, 212);
`;

const PokeImage = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  background-color: #f53e4a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  z-index: 99999;
`;

const Poke = styled.article``;

const PokeInfo = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;
`;

const Info = styled.div``;

const Title = styled.h1`
  padding: 0 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  opacity: 0.7;
`;

const Value = styled.h1`
  padding: 0 0.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  max-width: fit-content;
`;

const PokeStats = styled.div``;

const Modal = ({ isOpen, onClose, children, id, handleCloseModal }) => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const resp = await getPokemonById(id);
      setData(resp);
    };
    getData();
  }, [id]);
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader onClick={onClose} />
        <PokeImage>
          <Image
            alt={`Image of ${data?.name}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
          ></Image>
          <PokeId>#{data?.name}</PokeId>
        </PokeImage>
        <Poke>
          <PokeInfo>
            <Info>
              <Title>Weight</Title>
              <Value>{data?.weight / 10}Kg</Value>
            </Info>
            <Info>
              <Title>Height</Title>
              <Value>{data?.height / 10}m</Value>
            </Info>
            <Info>
              <Title>Ability</Title>
              <Value>
                {data?.abilities ? data?.abilities[0]?.ability?.name : ""}
              </Value>
            </Info>
          </PokeInfo>

          <PokeStats></PokeStats>
        </Poke>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
