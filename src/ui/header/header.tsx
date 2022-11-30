import styled from "styled-components";
import { palette } from "../../palette";
import { MainContainer } from "../main-container/main-container";
import { TextMinor } from "../styled-text";
import { GeoTag } from "./geo-tag";

const HeaderContainer = styled.div`
  background-color: ${palette.darkGrey};
  height: 160px;
`;

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderMiddleContainer = styled.div``;

const HeaderBottomContainer = styled.div``;

//TODO: Сделать компонент ссылки.
// Сделать компонент инпута
// Сделать компонент диалога

const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <HeaderTopContainer>
          <GeoTag areaName="Москва и МО" />
          <div>
            <TextMinor>О нас </TextMinor>
            <TextMinor>Контакты</TextMinor>
          </div>
        </HeaderTopContainer>
        <HeaderMiddleContainer></HeaderMiddleContainer>
        <HeaderBottomContainer></HeaderBottomContainer>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;
