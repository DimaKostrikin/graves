import { palette } from "@/palette";
import { ComponentType, ReactNode, useRef } from "react";
import { mergeProps, useButton, useHover } from "react-aria";
import styled from "styled-components";

const transparentHover = "rgba(0, 0, 0, 0.3)";
const transparentPressed = "rgba(0, 0, 0, 0.4)";

const ButtonContainer = styled.button<{
  isHovered?: boolean;
  isPressed?: boolean;
  view: "normal" | "ghost";
}>`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  column-gap: 16px;
  border-width: 0;
  margin: 0;
  padding: 0;
  height: 48px;
  background-color: ${(props) => {
    if (props.view === "normal") {
      if (props.isPressed) return palette.blueActivePressed;
      if (props.isHovered) return palette.blueActiveHovered;
      return palette.blueActive;
    }
    if (props.view === "ghost") {
      if (props.isPressed) return transparentPressed;
      if (props.isHovered) return transparentHover;
      return "transparent";
    }
  }};
  justify-items: center;
  align-items: center;
  border-radius: 16px;
  color: ${palette.white};
  font-family: GillSansC;
  font-size: 18px;
  white-space: nowrap;
  cursor: pointer;
  outline-style: none;
  min-width: 48px;
`;

export const Button = ({
  text,
  view = "normal",
  size = "normal",
  icon: Icon,
  disabled,
  onPress,
}: {
  text?: string;
  view?: "ghost" | "normal";
  size?: "small" | "normal";
  icon?: ComponentType<{ width: number; height: number; color: string }>;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(
    { type: "button", isDisabled: disabled, onPress },
    ref
  );
  const { hoverProps, isHovered } = useHover({});

  return (
    <ButtonContainer
      {...mergeProps(buttonProps, hoverProps)}
      isHovered={isHovered}
      isPressed={isPressed}
      view={view}
    >
      {text && <span>{text}</span>}
      {Icon && <Icon width={24} height={24} color={palette.darkGrey} />}
    </ButtonContainer>
  );
};
