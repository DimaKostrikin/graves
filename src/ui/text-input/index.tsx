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
        ref={ref}
        {...inputProps}
        isError={Boolean(errorMessage)}
      />
      {errorMessage && (
        <TextInputErrorMessage {...errorMessageProps}>
          {errorMessage}
        </TextInputErrorMessage>
      )}
    </div>
  );
};

export const PhoneInput = ({
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
  onChange: (plainText: string) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const modeRef = useRef<"russia" | "international">("russia");

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      { value, isDisabled: disabled, placeholder, name: "phone" },
      ref
    );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {label && <TextInputLabel {...labelProps}>{label}</TextInputLabel>}
      <TextInputInput
        ref={ref}
        {...inputProps}
        isError={Boolean(errorMessage)}
        onChange={(e) => {
          let maskedPhoneNumber = "";
          const value = e.currentTarget.value;
          const plainNumbers = value.replace(/\D/g, "");

          if (value === "") {
            onChange("");
            return;
          }

          if (e.currentTarget.selectionStart !== value.length) {
            onChange(value);
            return;
          }

          if (
            plainNumbers === "7" ||
            plainNumbers === "8" ||
            plainNumbers === "9"
          ) {
            modeRef.current = "russia";
          } else if (plainNumbers.length === 1) {
            modeRef.current = "international";
          }

          if (value === "+") {
            modeRef.current = "international";
          }

          if (modeRef.current === "russia") {
            maskedPhoneNumber = "+7 (";

            if (plainNumbers === "9") {
              maskedPhoneNumber = "+7 (9";
            }

            maskedPhoneNumber += plainNumbers.substring(1, 4);

            if (plainNumbers.length >= 5) {
              maskedPhoneNumber += ") ";
              maskedPhoneNumber += plainNumbers.substring(4, 7);
            }

            if (plainNumbers.length >= 8) {
              maskedPhoneNumber += "-";
              maskedPhoneNumber += plainNumbers.substring(7, 9);
            }

            if (plainNumbers.length >= 10) {
              maskedPhoneNumber += "-";
              maskedPhoneNumber += plainNumbers.substring(9, 11);
            }
          }

          if (modeRef.current === "international") {
            maskedPhoneNumber = "+";
            maskedPhoneNumber += plainNumbers;
          }

          onChange(maskedPhoneNumber);
        }}
      />
      {errorMessage && (
        <TextInputErrorMessage {...errorMessageProps}>
          {errorMessage}
        </TextInputErrorMessage>
      )}
    </div>
  );
};
