import Banner from "../../../../assets/banner/Imagem.webp";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import * as Styled from "./styles";
import { useTheme } from "styled-components";

export default function Intro() {
  const theme = useTheme();

  const ITENS = [
    {
      _id: Math.random(),
      title: "Compra simples e segura",
      icon: ShoppingCart,
      color: theme.colors["yellow-dark"],
    },
    {
      _id: Math.random(),
      title: "Embalagem mantém o café intacto",
      icon: Package,
      color: theme.colors["base-text"],
    },
    {
      _id: Math.random(),
      title: "Entrega rápida e rastreada",
      icon: Timer,
      color: theme.colors.yellow,
    },
    {
      _id: Math.random(),
      title: "O café chega fresquinho até você",
      icon: Coffee,
      color: theme.colors.purple,
    },
  ];

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </Styled.Title>
        <Styled.Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </Styled.Subtitle>
        <Styled.Info>
          {ITENS.map((item) => {
            return (
              <Styled.InfoDetail key={`$info-id=${item._id}`}>
                <div className="icon-area" style={{ background: item.color }}>
                  <item.icon size={18} color={theme.colors.white} />
                </div>
                <h4>{item.title}</h4>
              </Styled.InfoDetail>
            );
          })}
        </Styled.Info>
      </Styled.Content>
      <Styled.Logo
        src={Banner}
        title="Coffee Delivery - Encontre o café perfeito para qualquer hora do dia"
        alt="Coffee Delivery - Encontre o café perfeito para qualquer hora do dia"
        draggable={false}
      />
    </Styled.Container>
  );
}
