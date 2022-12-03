import { palette } from "@/palette";
import Link from "next/link";
import { useHover } from "react-aria";
import styled from "styled-components";

const TextInfoLink = styled.span<{ hover?: boolean }>`
  font-family: GillSansC;
  color: ${(props) => (props.hover ? palette.blueActive : palette.white)};
  font-size: 14px;
`;

const InfoLinksContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 16px;
  align-items: center;
  white-space: nowrap;
`;

const InfoLink = ({ href, text }: { href: string; text: string }) => {
  const { hoverProps, isHovered } = useHover({});

  return (
    <Link href={href}>
      <TextInfoLink {...hoverProps} hover={isHovered}>
        {text}
      </TextInfoLink>
    </Link>
  );
};

export const InfoLinks = () => {
  return (
    <InfoLinksContainer>
      <InfoLink href="about" text="О нас" />
      <InfoLink href="contacts" text="Контакты" />
    </InfoLinksContainer>
  );
};
