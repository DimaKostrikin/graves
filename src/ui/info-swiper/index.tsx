import { palette } from "@/palette";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Button } from "../button/button";
import { icons } from "..";

const useData = () => {
  return {
    items: [
      {
        title: "Никаких забот",
        text: "Ход выполнения работ вы можете отслеживать в личном кабинете, также все обновления будут высылаться по СМС. Изготовление, доставка, установка на нас.",
        imageSrc:
          "https://media.istockphoto.com/id/1252669949/ru/фото/рабочий-завода-человек-стоит-перед-машиной-и-действия-уверенно-на-рабочем-месте-смотреть-в.jpg?s=1024x1024&w=is&k=20&c=6x7y433nDfkILOfnHL-jVUZdY3djk8pruijLgS3BMME=",
      },
      {
        title: "Гранит высокого качества",
        text: "Сырье мы получаем напрямую от наших партнеров в Карелии. Прямые поставки позволяют значительно сократить цены на памятники.",
        imageSrc:
          "https://content.onliner.by/news/1100x5616/c0db8ed97743fd09973c2d327f5a53ad.jpeg",
      },
      {
        title: "3D визуализация",
        text: "Перед началом работ предоставляются макеты будущего проекта. Специалисты по 3D графике учтут особые пожелания заказчика.",
        imageSrc:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjB3b3JrZXJ8ZW58MHx8MHx8&w=1000&q=80",
      },
    ],
  };
};

const InfoSwiperContainer = styled.div<{
  imageSrc: string;
  mode?: "huge" | "avg" | "small";
}>`
  border-radius: 20px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.71) 0%,
      rgba(0, 0, 0, 0.26) 100%
    ),
    url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  ${(props) => {
    if (props.mode === "huge") return "padding: 64px 64px;";
    if (props.mode === "avg") return "padding: 32px 64px;";
    if (props.mode === "small") return "padding: 32px 40px;";
  }}
  width: 100%;
  ${(props) => {
    if (props.mode === "huge") return "height: 400px;";
    if (props.mode === "avg") return "height: 400px;";
    if (props.mode === "small") return "height: 400px;";
  }}
  display: grid;
  grid-template-rows: min-content min-content;
  row-gap: 16px;
  position: relative;
  overflow: hidden;
`;

const InfoSwiperTitle = styled.span<{ mode?: "huge" | "small" | "avg" }>`
  font-family: GillSansC;
  color: ${palette.white};
  ${(props) => {
    if (props.mode === "huge") return "font-size: 64px;";
    if (props.mode === "avg") return "font-size: 56px;";
    if (props.mode === "small") return "font-size: 32px;";
  }}
  z-index: 99;
  user-select: none;
`;

const InfoSwiperText = styled.span<{ mode?: "huge" | "small" | "avg" }>`
  font-family: GillSansC;
  color: ${palette.white};
  max-width: ${(props) => (props.mode === "huge" ? "70%" : "100%")};
  ${(props) => {
    if (props.mode === "huge") return "font-size: 36px;";
    if (props.mode === "avg") return "font-size: 32px;";
    if (props.mode === "small") return "font-size: 24px;";
  }}
  z-index: 99;
  user-select: none;
`;

const ButtonContainer = styled.div<{ position: "left" | "right" }>`
  display: grid;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.position === "left" ? "left: 4px;" : "right: 4px;")}
  z-index: 199;
`;

// TODO: разобраться с тайпингами в стейте свайпера, убрать any
// Добавить еще один брейкпоинт на ~400 пикселей.

export const Content = ({ className }: { className?: string }) => {
  const { items } = useData();
  const [swiper, setSwiper] = useState<any>(null);
  const [mode, setMode] = useState<"huge" | "small" | "avg">("huge");

  useEffect(() => {
    if (!swiper) {
      return;
    }

    const intervalId = setInterval(() => {
      swiper.slideNext();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [swiper]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Swiper
        spaceBetween={50}
        width={null}
        loop={true}
        onSwiper={(swiper) => {
          setSwiper(swiper);

          if (swiper.width >= 900) {
            setMode("huge");
            return;
          }
          if (swiper.width >= 700) {
            setMode("avg");
            return;
          }
          if (swiper.width < 700) {
            setMode("small");
            return;
          }
          if (swiper.width < 900) {
            setMode("avg");
            return;
          }
        }}
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span class=${className}></span>`;
          },
        }}
        modules={[Pagination]}
        slidesPerView={1}
        className={"SwiperClassCustom"}
        observer
        observeParents
        onResize={(e) => {
          if (e.width >= 900) {
            setMode("huge");
            return;
          }
          if (e.width >= 700) {
            setMode("avg");
            return;
          }
          if (e.width < 700) {
            setMode("small");
            return;
          }
          if (e.width < 900) {
            setMode("avg");
            return;
          }
        }}
      >
        {items.map(({ title, text, imageSrc }) => {
          return (
            <SwiperSlide key={imageSrc}>
              <InfoSwiperContainer mode={mode} imageSrc={imageSrc}>
                <InfoSwiperTitle mode={mode}>{title}</InfoSwiperTitle>
                <InfoSwiperText mode={mode}>{text}</InfoSwiperText>
              </InfoSwiperContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ButtonContainer position="left">
        <Button
          icon={icons.ArrowLeft}
          view="ghostInvert"
          onPress={() => swiper.slidePrev()}
        />
      </ButtonContainer>
      <ButtonContainer position="right">
        <Button
          icon={icons.ArrowRight}
          view="ghostInvert"
          onPress={() => swiper.slideNext()}
        />
      </ButtonContainer>
    </div>
  );
};

export const InfoSwiper = styled(Content)`
  .SwiperClassCustom {
    width: 100%;
    overflow: hidden;
    max-width: 1200px;
  }
`;
