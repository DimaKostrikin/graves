import styled from "styled-components";
import { palette } from "../palette";
import Header from "../ui/header/header";
import { MainContainer } from "@/ui/main-container/main-container";
import { InfoSwiper } from "@/ui/info-swiper";

const PageContainer = styled.div`
  background-color: ${palette.white};
  display: grid;
`;

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer style={{ marginBlockStart: 160 }}>
        <InfoSwiper />
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
