import { icons } from "@/ui";
import styled from "styled-components";
import { ActionButton } from "./action-button";

const ActionButtonGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
`;

export const ActionButtonGroup = () => {
  return (
    <ActionButtonGroupContainer>
      <ActionButton text="Корзина" icon={<icons.Cart />} />
      <ActionButton text="Мои заказы" icon={<icons.ShoppingBag />} />
      <ActionButton text="Войти" icon={<icons.Person />} />
    </ActionButtonGroupContainer>
  );
};
