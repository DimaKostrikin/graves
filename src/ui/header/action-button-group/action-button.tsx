import { TextRegularInvert } from "@/ui/styled-text";
import { ReactNode } from "react";
import styled from "styled-components";

//TODO: переделать на button
const ActionButtonContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const ActionButton = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) => {
  return (
    <ActionButtonContainer>
      {icon}
      <TextRegularInvert>{text}</TextRegularInvert>
    </ActionButtonContainer>
  );
};
