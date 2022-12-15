import { Dialog } from "@/ui/dialog";
import styled from "styled-components";
import { palette } from "../palette";
import Header from "../ui/header/header";

const PageContainer = styled.div`
  background-color: ${palette.white};
`;

const Home = () => {
  return (
    <PageContainer>
      <Dialog
        children={<div>Registration epta</div>}
        title="Registration"
        onClose={() => console.log(1)}
      />
      <Header />
    </PageContainer>
  );
};

export default Home;
