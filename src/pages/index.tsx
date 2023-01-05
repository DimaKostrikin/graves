import styled from "styled-components";
import { palette } from "../palette";
import Header from "../ui/header/header";
import { MainContainer } from "@/ui/main-container/main-container";
import { InfoSwiper } from "@/ui/info-swiper";
import { GraveCard } from "@/ui/grave-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { Button } from "@/ui/button/button";
import { icons } from "@/ui";

const PageContainer = styled.div`
  background-color: ${palette.white};
  display: grid;
`;

const CardGroupTitle = styled.div`
  font-size: 31px;
  font-family: GillSansC;
  color: ${palette.darkGrey};
  white-space: nowrap;
`;

const CardGroupRow = styled.div`
  display: grid;
  margin-top: 16px;
  column-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const cardGroups = [
  {
    title: "Скидки зимой",
    cards: [
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
    ],
  },
  {
    title: "Авторские модели",
    cards: [
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
      {
        title: "Памятник А-15",
        imageLink: "https://i.ibb.co/VC4hdky/Rectangle-25-1.webp",
        price: 7500,
        oldPrice: 15000,
      },
    ],
  },
];

const ButtonContainer = styled.div<{ position: "left" | "right" }>`
  display: grid;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.position === "left" ? "left: -8px;" : "right: -8px;")}
  z-index: 199;
`;

// TODO: разобраться с выключением тача на десктопе.

const CardGroup = ({
  title,
  cards,
}: {
  title: string;
  cards: {
    title: string;
    price: number;
    oldPrice: number;
    imageLink: string;
  }[];
}) => {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [swiper, setSwiper] = useState<any>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setisBeginning] = useState(true);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    setisBeginning(swiper.isBeginning);
  }, [swiper]);

  return (
    <div style={{ marginTop: 40, position: "relative" }}>
      <CardGroupTitle>{title}</CardGroupTitle>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={16}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onTouchMove={() => {
          setIsEnd(swiper.isEnd);
          setisBeginning(swiper.isBeginning);
        }}
        allowTouchMove={false}
        className="CardGroupSwiperCustom"
        onResize={(e) => {
          if (e.width > 1000) {
            setSlidesPerView(5.1);
            return;
          }
          if (e.width > 777) {
            setSlidesPerView(4.1);
            return;
          }
          if (e.width > 612) {
            setSlidesPerView(3.1);
            return;
          }
          if (e.width < 612) {
            setSlidesPerView(2.2);
            return;
          }
          if (e.width < 777) {
            setSlidesPerView(3.1);
            return;
          }
          if (e.width < 1000) {
            setSlidesPerView(4.1);
            return;
          }
        }}
      >
        {cards.map(({ title, price, oldPrice, imageLink }) => (
          <SwiperSlide key={imageLink}>
            <GraveCard
              title={title}
              price={price}
              oldPrice={oldPrice}
              imageLink={imageLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isEnd && (
        <ButtonContainer position="right">
          <Button
            view="white"
            icon={icons.ArrowRight}
            onPress={() => {
              swiper.slideNext();
              setIsEnd(swiper.isEnd);
              setisBeginning(swiper.isBeginning);
            }}
          />
        </ButtonContainer>
      )}
      {!isBeginning && (
        <ButtonContainer position="left">
          <Button
            view="white"
            icon={icons.ArrowLeft}
            onPress={() => {
              swiper.slidePrev();
              setIsEnd(swiper.isEnd);
              setisBeginning(swiper.isBeginning);
            }}
          />
        </ButtonContainer>
      )}
    </div>
  );
};

const CardGroupStyled = styled(CardGroup)`
  .CardGroupSwiperCustom {
    width: calc(100%);
    overflow: hidden;
    max-width: 1200px;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer style={{ marginBlockStart: 160 }}>
        <InfoSwiper />
        {cardGroups.map(({ title, cards }) => (
          <CardGroupStyled key={title} title={title} cards={cards} />
        ))}
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
