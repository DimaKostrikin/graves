import { palette } from "@/palette";
import { useRef } from "react";
import { useTextField } from "react-aria";
import styled from "styled-components";

const TextInputLabel = styled.label`
  font-family: GillSansC;
  color: ${palette.darkGrey};
  font-size: 20px;
  margin-block-end: 2px;
  white-space: nowrap;
`;

const TextInputErrorMessage = styled.span`
  font-family: GillSansC;
  color: ${palette.red};
  font-size: 14px;
  white-space: nowrap;
  margin-block-start: 2px;
`;

const TextInputInput = styled.input<{ isError?: boolean }>`
  height: 56px;
  font-size: 25px;
  outline-style: none;
  border-radius: 8px;
  border-width: 1px;
  font-family: GillSansC;
  color: ${palette.darkGrey};
  padding: 0 16px;
  border-color: ${(props) => (props.isError ? palette.red : palette.darkWhite)};
  border-style: solid;
`;

export const TextInput = ({
  label,
  value,
  disabled,
  errorMessage,
  placeholder,
  onChange,
}: {
  label?: string;
  value: string;
  disabled?: boolean;
  placeholder?: string;
  errorMessage?: string;
  onChange: (text: string) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField({ value, isDisabled: disabled, placeholder, onChange }, ref);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {label && <TextInputLabel {...labelProps}>{label}</TextInputLabel>}
      <TextInputInput
        isError={Boolean(errorMessage)}
        {...inputProps}
        ref={ref}
      />
      {errorMessage && (
        <TextInputErrorMessage {...errorMessageProps}>
          {errorMessage}
        </TextInputErrorMessage>
      )}
    </div>
  );
};
