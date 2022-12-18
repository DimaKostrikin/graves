import { palette } from "@/palette";
import { icons } from "@/ui";
import { useRef, useState } from "react";
import {
  AriaTextFieldOptions,
  mergeProps,
  useFocus,
  useTextField,
} from "react-aria";
import styled from "styled-components";

const SearchInputContainer = styled.div`
  display: grid;
  position: relative;
`;
const SearchInputInput = styled.input`
  border-radius: 8px;
  border: 0;
  padding: 0 48px;
  margin: 0;
  font-family: GillSansC;
  color: ${palette.white};
  font-size: 20px;
  background-color: ${palette.darkWhite};
  outline-style: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${palette.white};
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    color: ${palette.white};
    opacity: 0.6;
  }
`;
const SearchIconContainer = styled.div`
  position: absolute;
  top: 9px;
  left: 16px;
`;

export const SearchInput = (props: AriaTextFieldOptions<"input">) => {
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useTextField(props, ref);
  const [placeholder, setPlaceholder] = useState("Введите поисковый запрос");
  const { focusProps } = useFocus({
    // Нигде не скрывается плэйсхолдер по фокусу чзх.
    // onFocus: () => {
    //   setPlaceholder("");
    // },
    onBlur: () => {
      setPlaceholder("Введите поисковый запрос");
    },
  });

  return (
    <SearchInputContainer>
      <SearchIconContainer>
        <icons.Search color={palette.white} />
      </SearchIconContainer>
      <SearchInputInput
        {...mergeProps(inputProps, focusProps)}
        placeholder={placeholder}
      />
    </SearchInputContainer>
  );
};
