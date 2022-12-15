import { palette } from "@/palette";
import { FocusableElement } from "@react-types/shared";
import { DOMAttributes, ReactNode, useRef } from "react";
import { useDialog, useOverlay } from "react-aria";
import styled from "styled-components";

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
  width: 600px;
  height: 300px;
  background-color: ${palette.white};
`;

export const Dialog = ({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
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
        <h3>{title}</h3>
        {children}
      </DialogOverlay>
    </DialogUnderlay>
  );
};
