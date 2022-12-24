import { palette } from "@/palette";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const useData = () => {
  return {
    items: [
      {
        title: "Никаких забот",
        text: "Ход выполнения работ вы можете отслеживать в личном кабинете, также все обновления будут высылаться по СМС. Изготовление, доставка, установка на нас.",
        imageSrc: "https://geoplatforma.ru/wv/0001/1103.jpg",
      },
      {
        title: "Гранит высокого качества по себестоимости",
        text: "Наш гранит мы получаем напрямую от наших партнеров в Карелии.  Прямые поставки позволяют значительно сократить цены на памятники.",
        imageSrc: "",
      },
      {
        title: "3D визуализация",
        text: "Перед началом работ предоставляются макеты будущего проекта. Специалисты по 3D графике учтут особые пожелания заказчика.",
        imageSrc: "",
      },
    ],
  };
};

const InfoSwiperContainer = styled.div<{ imageSrc: string }>`
  border-radius: 20px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.71) 0%,
      rgba(0, 0, 0, 0.26) 100%
    ),
    url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 32px;
  width: 100%;
  height: 450px;
  display: grid;
  grid-template-rows: min-content min-content;
  row-gap: 29px;
  position: relative;
`;

const InfoSwiperTitle = styled.span`
  font-family: GillSansC;
  color: ${palette.white};
  font-size: 64px;
  z-index: 99;
`;

const InfoSwiperText = styled.span`
  font-family: GillSansC;
  color: ${palette.white};
  font-size: 44px;
  max-width: 70%;
  z-index: 99;
`;

export const InfoSwiper = () => {
  const { items } = useData();
  return (
    <Swiper spaceBetween={30}>
      {items.map(({ title, text, imageSrc }) => {
        return (
          <SwiperSlide>
            <InfoSwiperContainer imageSrc={imageSrc}>
              <InfoSwiperTitle>{title}</InfoSwiperTitle>
              <InfoSwiperText>{text}</InfoSwiperText>
            </InfoSwiperContainer>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
