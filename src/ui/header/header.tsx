import styled from "styled-components";
import { palette } from "../../palette";
import { MainContainer } from "../main-container/main-container";

const HeaderContainer = styled.div`
  background-color: ${palette.darkGrey};
  height: 160px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer></MainContainer>
    </HeaderContainer>
  );
};

export default Header;