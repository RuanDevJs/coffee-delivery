import Intro from "./components/Intro";
import Coffee from "./components/coffees";

import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Container>
      <Intro />
      <Coffee />
    </Styled.Container>
  );
}
