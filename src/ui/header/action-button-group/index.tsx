import { palette } from "@/palette";
import { icons } from "@/ui";
import styled from "styled-components";
import { ActionButton } from "./action-button";

const ActionButtonGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ActionButtonGroup = () => {
  return (
    <ActionButtonGroupContainer>
      <ActionButton
        text="Корзина"
        icon={<icons.Cart color={palette.white} />}
      />
    </ActionButtonGroupContainer>
  );
};
