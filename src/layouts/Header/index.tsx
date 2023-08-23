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
            <select name="state" id="state-input">
              <option value="Minas Gerais" label="Minas Gerais" />
              <option value="São Paulo" label="São Paulo" />
              <option value="Rio de Janeiro" label="Rio de Janeiro" />
              <option value="Rio Grande do Sul" label="Rio Grande do Sul" />
            </select>
          </li>
          <li id="shopping-cart">
            <NavLink to="/checkout">
              <ShoppingCart size={24} weight="fill" color="#C47F17" />
            </NavLink>
          </li>
        </Styled.Menu>
      </Styled.Navigation>
    </Styled.Container>
  );
}
