import { palette } from "@/palette";
import { icons } from "@/ui";
import { useRef } from "react";
import { AriaTextFieldOptions, useTextField } from "react-aria";
import styled from "styled-components";

const SearchInputContainer = styled.div`
  display: grid;
  position: relative;
`;
const SearchInputInput = styled.input`
  border-radius: 500px;
  border: 0;
  padding: 0 48px;
  margin: 0;
  font-family: GillSansC;
  color: ${palette.white};
  font-size: 20px;
  background-color: ${palette.darkWhite};
  outline-style: none;
`;
const SearchIconContainer = styled.div`
  position: absolute;
  top: 9px;
  left: 16px;
`;

export const SearchInput = (props: AriaTextFieldOptions<"input">) => {
  let ref = useRef<HTMLInputElement>(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <icons.Search color={palette.white} />
      </SearchIconContainer>
      <SearchInputInput {...inputProps} ref={ref} />
    </SearchInputContainer>
  );
};
