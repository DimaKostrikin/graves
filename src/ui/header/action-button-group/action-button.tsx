import { palette } from "@/palette";
import { TextRegularHeaderInvert } from "@/ui/styled-text";
import { ReactNode } from "react";
import { useHover } from "react-aria";
import styled from "styled-components";

const ActionButtonContainer = styled.button<{ hover?: boolean }>`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0;
  padding: 0;
  outline-style: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => (props.hover ? palette.blueActive : palette.white)};
`;

//TODO: сделать красный кружок с апдейтами для группы.
export const ActionButton = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) => {
  const { hoverProps, isHovered } = useHover({});

  return (
    <ActionButtonContainer {...hoverProps} hover={isHovered}>
      {icon}
      <TextRegularHeaderInvert hover={isHovered}>
        {text}
      </TextRegularHeaderInvert>
    </ActionButtonContainer>
  );
};
