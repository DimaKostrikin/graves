import Link from "next/link";
import { useHover } from "react-aria";
import styled from "styled-components";
import { palette } from "../../palette";
import { MainContainer } from "../main-container/main-container";
import { ActionButtonGroup } from "./action-button-group";
import { Catalog } from "./catalog";
import { GeoTag } from "./geo-tag";

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

const InfoLinksContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 16px;
  align-items: center;
  white-space: nowrap;
`;

const TextInfoLink = styled.span<{ hover?: boolean }>`
  font-family: GillSansC;
  color: ${(props) => (props.hover ? palette.blueActive : palette.white)};
  font-size: 14px;
`;

const InfoLink = ({ href, text }: { href: string; text: string }) => {
  const { hoverProps, isHovered } = useHover({});

  return (
    <Link href={href}>
      <TextInfoLink {...hoverProps} hover={isHovered}>
        {text}
      </TextInfoLink>
    </Link>
  );
};

const InfoLinks = () => {
  return (
    <InfoLinksContainer>
      <InfoLink href="about" text="О нас" />
      <InfoLink href="contacts" text="Контакты" />
    </InfoLinksContainer>
  );
};

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
