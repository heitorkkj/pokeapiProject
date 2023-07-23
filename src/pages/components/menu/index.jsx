import { keyframes, styled } from "styled-components";
import useSwr from "swr";
import fetcher from "@/service/api.service";
import icons from "../../utils/typeIcons";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Define o quanto a imagem irá subir */
  }
  100% {
    transform: translateY(0);
  }
`;

const Menu = styled.nav`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;

  box-shadow: 0rem 0rem 1rem 0rem #cccbcc;
`;

const ImageLogo = styled.img`
  width: 80%;
  height: auto;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TypeLink = styled.button`
  width: 80%;

  background-color: inherit;
  border: none;
  text-transform: capitalize;
  cursor: pointer;

  span {
    width: 50%;
    border-radius: 0.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: all 0.4s;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 150%;
    color: #909090;
    opacity: .4;
  }
  span:hover {
    opacity: 1;
  }
`;

const IconType = styled.img`
  width: 16px;
  height: 16px;
`;

const MenuType = () => {
  // const {
  //   data: PokemonType,
  //   error: TypeError,
  //   mutate: TypeMutate,
  //   isValidating: isValidatingError,
  // } = useSwr(`https://pokeapi.co/api/v2/type`, fetcher, {
  //   revalidateOnFocus: false,
  // });

  return (
    <Menu>
      <ImageLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-1-1.png"></ImageLogo>
      <Nav>
        {icons?.map((element) => {
          return (
            <TypeLink key={element?.id}>
              <span>
                <IconType src={element?.url} />
                {element?.name}
              </span>
            </TypeLink>
          );
        })}
      </Nav>
    </Menu>
  );
};

export default MenuType;
