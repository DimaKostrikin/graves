import { palette } from "@/palette";
import Link from "next/link";
import { useHover } from "react-aria";
import styled from "styled-components";

const TextNavLink = styled.span<{ hover?: boolean }>`
  font-family: GillSansC;
  color: ${(props) => (props.hover ? palette.blueActive : palette.white)};
  font-size: 20px;
`;

const NavLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  column-gap: 16px;
  align-items: center;
  white-space: nowrap;
`;

const NavLink = ({ href, text }: { href: string; text: string }) => {
  const { hoverProps, isHovered } = useHover({});

  return (
    <Link href={href}>
      <TextNavLink {...hoverProps} hover={isHovered}>
        {text}
      </TextNavLink>
    </Link>
  );
};

export const NavLinks = () => {
  return (
    <NavLinksContainer>
      <NavLink href="/" text="Главная" />
      <NavLink href="collections" text="Коллекции" />
      <NavLink href="service" text="Услуги" />
      <NavLink href="projects" text="Наши работы" />
      <NavLink href="wholesale" text="Оптовые заказы" />
    </NavLinksContainer>
  );
};
