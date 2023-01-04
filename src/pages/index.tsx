import styled from "styled-components";
import { palette } from "../palette";
import Header from "../ui/header/header";
import { MainContainer } from "@/ui/main-container/main-container";
import { InfoSwiper } from "@/ui/info-swiper";
import { GraveCard } from "@/ui/grave-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

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
    ],
  },
];

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
  return (
    <div style={{ marginTop: 40 }}>
      <CardGroupTitle>{title}</CardGroupTitle>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={16}
        className="CardGroupSwiperCustom"
        onResize={(e) => {
          if (e.width > 1000) {
            setSlidesPerView(5);
            return;
          }
          if (e.width > 777) {
            setSlidesPerView(4);
            return;
          }
          if (e.width > 612) {
            setSlidesPerView(3);
            return;
          }
          if (e.width < 612) {
            setSlidesPerView(2);
            return;
          }
          if (e.width < 777) {
            setSlidesPerView(3);
            return;
          }
          if (e.width < 1000) {
            setSlidesPerView(4);
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
      <CardGroupRow></CardGroupRow>
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
