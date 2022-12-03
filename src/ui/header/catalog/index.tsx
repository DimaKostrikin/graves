import { palette } from "@/palette";
import { icons } from "@/ui";
import { TextRegularHeaderInvert } from "@/ui/styled-text";
import styled from "styled-components";

const CatalogContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content auto;
  column-gap: 16px;
`;

export const Catalog = () => {
  return (
    <CatalogContainer>
      <icons.Catalog color={palette.white} />
      <TextRegularHeaderInvert>Каталог</TextRegularHeaderInvert>
    </CatalogContainer>
  );
};
