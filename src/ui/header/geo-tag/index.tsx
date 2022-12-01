import { icons } from "@/ui";
import styled from "styled-components";
import { palette } from "../../../palette";

import { TextMinorInvert } from "../../styled-text";

const GeoTagContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const GeoTag = ({ areaName }: { areaName: string }) => {
  return (
    <GeoTagContainer>
      <icons.Geolocation color={palette.blueActive} />
      <TextMinorInvert>{areaName}</TextMinorInvert>
    </GeoTagContainer>
  );
};
