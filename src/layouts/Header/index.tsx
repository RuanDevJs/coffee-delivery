import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

import * as Styled from "./styles";

export default function Intro() {
  return (
    <Styled.Container>
      <NavLink to="/">
        <Styled.Logo
          src={Logo}
          alt="Coffee Delivery | Logo"
          title="Coffee Delivery"
          draggable={false}
        />
      </NavLink>
      <Styled.Navigation>
        <Styled.Menu>
          <li id="state-menu">
            <MapPin color="#8047F8" size={24} weight="fill" />
            <span>Minas Gerais</span>
          </li>
          <NavLink to="/checkout" id="shopping-cart">
            <ShoppingCart size={24} weight="fill" color="#C47F17" />
          </NavLink>
        </Styled.Menu>
      </Styled.Navigation>
    </Styled.Container>
  );
}
