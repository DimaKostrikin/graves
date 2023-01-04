import styled from "styled-components";
import { palette } from "../palette";
import Header from "../ui/header/header";
import { MainContainer } from "@/ui/main-container/main-container";
import { InfoSwiper } from "@/ui/info-swiper";
import { GraveCard } from "@/ui/grave-card";

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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  return (
    <div style={{ marginTop: 40 }}>
      <CardGroupTitle>{title}</CardGroupTitle>
      <CardGroupRow>
        {cards.map(({ title, price, oldPrice, imageLink }) => (
          <GraveCard
            title={title}
            price={price}
            oldPrice={oldPrice}
            imageLink={imageLink}
          />
        ))}
      </CardGroupRow>
    </div>
  );
};

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer style={{ marginBlockStart: 160 }}>
        <InfoSwiper />
        {cardGroups.map(({ title, cards }) => (
          <CardGroup title={title} cards={cards} />
        ))}
      </MainContainer>
    </PageContainer>
  );
};

export default Home;
