import styled from "styled-components";
import { palette } from "../palette";

export const TextMinorInvert = styled.span`
  font-family: GillSansC;
  color: ${palette.white};
  font-size: 14px;
  white-space: nowrap;
`;

export const TextRegularHeaderInvert = styled.span<{ hover?: boolean }>`
  font-family: GillSansC;
  color: ${(props) => (props.hover ? palette.blueActive : palette.white)};
  font-size: 17px;
  white-space: nowrap;
`;
