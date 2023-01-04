import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: calc(100vw - 32px);
  }
  @media (max-width: 700px) {
    width: calc(100vw - 16px);
  }
`;
