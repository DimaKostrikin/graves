import styled from "styled-components";
import { palette } from "../palette";
import { Header } from "../ui/header/header";

const PageContainer = styled.div`
  background-color: ${palette.white};
`;

const Home = () => {
  return (
    <PageContainer>
      <Header />
    </PageContainer>
  );
};

export default Home;
