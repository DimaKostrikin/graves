import { palette } from "@/palette";
import { FocusableElement } from "@react-types/shared";
import { DOMAttributes, ReactNode, useRef } from "react";
import { useDialog, useOverlay } from "react-aria";
import styled from "styled-components";
import { icons } from "..";
import { Button } from "../button/button";

const DialogUnderlay = styled.div`
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  background-color: ${palette.darkTransparent};
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const DialogOverlay = styled.div`
  max-width: 600px;
  max-height: 600px;
  padding: 24px;
  background-color: ${palette.white};
  border-radius: 16px;
`;

const DialogTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DialogTitle = styled.span`
  font-family: GillSansC;
  color: ${palette.darkGrey};
  font-size: 40px;
  white-space: nowrap;
`;

export const Dialog = ({
  title,
  children,
  onApplyButtonText,
  onClose,
  onApply,
}: {
  title: string;
  children: ReactNode;
  onApplyButtonText?: string;
  onClose: () => void;
  onApply?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(
    {
      onClose,
      isDismissable: true,
      isOpen: true,
    },
    ref
  );

  return (
    <DialogUnderlay {...underlayProps}>
      <DialogOverlay role={"dialog"} {...overlayProps} ref={ref}>
        <DialogTitleContainer>
          <DialogTitle>{title}</DialogTitle>
          <Button view="ghost" icon={icons.Cross} onPress={onClose} />
        </DialogTitleContainer>
        {children}
        {onApply && (
          <div style={{ display: "grid" }}>
            <Button text={onApplyButtonText} onPress={onApply} />
          </div>
        )}
      </DialogOverlay>
    </DialogUnderlay>
  );
};
