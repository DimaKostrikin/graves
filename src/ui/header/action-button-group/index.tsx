import { icons } from "@/ui";
import { Dialog } from "@/ui/dialog";
import { useOverlayTriggerState } from "react-stately";
import styled from "styled-components";
import { ActionButton } from "./action-button";

const ActionButtonGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
`;

export const ActionButtonGroup = () => {
  const state = useOverlayTriggerState({});

  return (
    <ActionButtonGroupContainer>
      <ActionButton text="Корзина" icon={<icons.Cart />} />
      <ActionButton text="Мои заказы" icon={<icons.ShoppingBag />} />
      <ActionButton text="Войти" onPress={state.open} icon={<icons.Person />} />
    </ActionButtonGroupContainer>
  );
};
