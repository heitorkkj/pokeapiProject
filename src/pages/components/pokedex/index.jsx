import styled from "styled-components";
import icons from "../../../utils/typeIcons";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "../modal";

const SectionPokemons = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 5%;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PokeCard = styled.article`
  width: 25%;
  max-width: 23rem;
  height: 16rem;
  padding: 1rem;

  box-shadow: 0 0 2rem 0.1rem #efefef;
  border: 0.1rem solid #f2f2f2;
  border-radius: 0.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 2rem 0.1rem #d8d7d7;
  }
`;

const PokeImage = styled.div`
  width:70%;
  height:70%;
  max-width: 40rem;
  object-fit: fill;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Image = styled.img`
  max-width:65%;
  max-height:100%;
`;

const PokeInfo = styled.article`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

const PokeId = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 1rem;
  color: #bdbcbc;
`;

const PokeName = styled.h1`
  width: 90%;
  text-transform: uppercase;
  font-size: 1rem;
  color: #c0c0c0;
`;

const IconType = styled.img`
  width: 16px;
  height: 16px;
`;

const Pagination = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  span {
    border-radius: 0.5rem;
    border: none;
    background-color: #eeeeee;
    padding: 0.5rem 1rem;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  border: none;
  background-color: #eeeeee;
  padding: 0.5rem 1rem;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const PokeDex = ({ data, pokeImages, setUrl }) => {
  const currentPage = useRef(1);

  const handleChangePage = (e, type) => {
    e.preventDefault();
    if (type == "previous") {
      currentPage.current--;
      data.previous != null ? setUrl(data?.previous) : "";
    } else {
      currentPage.current++;
      setUrl(data?.next);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [pokeId, setPokeId] = useState(0);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setPokeId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPokeId(0);
  };

  return (
    <>
      <SectionPokemons>
        {data?.results?.map((element, index) => {
          return (
            <PokeCard key={index} onClick={()=>handleOpenModal(pokeImages[index]?.id)}>
              <PokeImage>
                <Image
                  alt={`Image of ${element.name}`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeImages[index]?.id}.svg`}
                ></Image>
              </PokeImage>
              <PokeInfo>
                <PokeId>#{pokeImages[index]?.id}</PokeId>
                <PokeName>{element.name}</PokeName>

                {icons?.map((element) => {
                  return element?.name ==
                    pokeImages[index]?.types[0]?.type?.name ? (
                    <IconType src={element?.url} />
                  ) : (
                    ""
                  );
                })}
              </PokeInfo>
            </PokeCard>
          );
        })}
        <Pagination>
          <Button onClick={(e) => handleChangePage(e, "previous")}>
            <FaChevronLeft />
          </Button>
          <span>{currentPage.current}</span>
          <Button onClick={(e) => handleChangePage(e, "next")}>
            <FaChevronRight />
          </Button>
        </Pagination>
      </SectionPokemons>

      <Modal isOpen={showModal} onClose={handleCloseModal} id={pokeId} handleCloseModal={handleCloseModal}>
      </Modal>
    </>
  );
};

export default PokeDex;
