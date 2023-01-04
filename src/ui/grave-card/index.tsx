import { palette } from "@/palette";
import { useState } from "react";
import styled from "styled-components";

const GraveCardContainer = styled.div``;

const ImageContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 366px;
  background-color: #d1d1d1;
`;

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

const CardTitle = styled.div`
  margin-top: 2px;
  font-family: GillSansC;
  color: ${palette.darkGrey};
  font-size: 18px;
  white-space: nowrap;
`;

const Price = styled.div`
  margin-top: 4px;
  font-family: GillSansC;
  color: ${palette.darkGrey};
  font-size: 22px;
  white-space: nowrap;
`;

// TODO: Сделать скидочную цену
// Разобраться с значком рубля
//

export const GraveCard = ({
  title,
  price,
  oldPrice,
  imageLink,
}: {
  title: string;
  price: number;
  oldPrice?: number;
  imageLink: string;
}) => {
  const [intl] = useState(new Intl.NumberFormat("ru-RU"));

  return (
    <GraveCardContainer>
      <ImageContainer>
        <ImageStyled src={imageLink} />
      </ImageContainer>
      <CardTitle>{title}</CardTitle>
      <Price>{`${intl.format(price)} ₽`}</Price>
    </GraveCardContainer>
  );
};
