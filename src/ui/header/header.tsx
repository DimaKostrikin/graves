import { useEffect, useState } from "react";
import styled from "styled-components";
import { palette } from "../../palette";
import { MainContainer } from "../main-container/main-container";
import { ActionButtonGroup } from "./action-button-group";
import { Catalog } from "./catalog";
import { GeoTag } from "./geo-tag";
import { InfoLinks } from "./info-links";
import { NavLinks } from "./nav-links";
import { SearchInput } from "./search-input/search-input";

const HeaderContainer = styled.div<{ isHidden?: boolean }>`
  background-color: ${palette.darkGrey};
  height: ${(props) => (props.isHidden ? "59px" : "136px")};
  position: fixed;
  width: 100%;
  top: 0;
  transition: all 0.1s;
`;

const HeaderTopContainer = styled.div<{ hidden?: boolean }>`
  display: flex;
  justify-content: space-between;
  transform: ${(props) => (props.hidden ? "translateY(-32px)" : "")};
  transition: all 0.1s;
`;

const HeaderMiddleContainer = styled.div<{ hidden?: boolean }>`
  margin-block-start: 16px;
  display: grid;
  grid-template-columns: min-content auto min-content;
  column-gap: 16px;
  transform: ${(props) => (props.hidden ? "translateY(-32px)" : "")};
  transition: all 0.1s;
`;

const HeaderBottomContainer = styled.div<{ hidden?: boolean }>`
  margin-block-start: 16px;
  transform: ${(props) => (props.hidden ? "translateY(-100px)" : "")};
  transition: all 0.1s;
`;

//TODO:
// Сделать компонент диалога
// Подцепить шрифт

//TODO: add debounce
// Убрать разворачивание при скролле наверх
const Header = () => {
  const [scroll, setScroll] = useState<"up" | "down">("up");
  useEffect(() => {
    let scrollTop = window.scrollY;

    const scrollListener = (ev: Event) => {
      if (window.scrollY >= scrollTop) {
        setScroll("down");
      } else {
        console.log("setUp");
        setScroll("up");
      }
      scrollTop = window.scrollY;
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <HeaderContainer isHidden={scroll === "down"}>
      <MainContainer>
        <HeaderTopContainer hidden={scroll === "down"}>
          <GeoTag areaName="Москва и МО" />
          <InfoLinks />
        </HeaderTopContainer>
        <HeaderMiddleContainer hidden={scroll === "down"}>
          <Catalog />
          <SearchInput />
          <ActionButtonGroup />
        </HeaderMiddleContainer>
        <HeaderBottomContainer hidden={scroll === "down"}>
          <NavLinks />
        </HeaderBottomContainer>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;
