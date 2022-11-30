import styled from "styled-components";
import { palette } from "../../../palette";
import { Geolocation } from "../../icons";
import { TextMinor } from "../../styled-text";

const GeoTagContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const GeoTag = ({ areaName }: { areaName: string }) => {
  return (
    <GeoTagContainer>
      <Geolocation color={palette.blueActive} />
      <TextMinor>{areaName}</TextMinor>
    </GeoTagContainer>
  );
};
