import styled from "styled-components";
import { palette } from "../../palette";
import { MainContainer } from "../main-container/main-container";
import { ActionButtonGroup } from "./action-button-group";
import { Catalog } from "./catalog";
import { GeoTag } from "./geo-tag";
import { InfoLinks } from "./info-links";

const HeaderContainer = styled.div`
  background-color: ${palette.darkGrey};
  height: 160px;
`;

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderMiddleContainer = styled.div`
  margin-block-start: 16px;
  display: grid;
  grid-template-columns: min-content auto min-content;
  column-gap: 16px;
`;

const HeaderBottomContainer = styled.div``;

//TODO: Сделать компонент ссылки.
// Сделать компонент инпута
// Сделать компонент диалога
// Подцепить шрифт

const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <HeaderTopContainer>
          <GeoTag areaName="Москва и МО" />
          <InfoLinks />
        </HeaderTopContainer>
        <HeaderMiddleContainer>
          <Catalog />
          <input />
          <ActionButtonGroup />
        </HeaderMiddleContainer>
        <HeaderBottomContainer></HeaderBottomContainer>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;
