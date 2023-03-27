import { ForkKnife } from "phosphor-react-native";
import { Container, Heading, IconTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Heading>
        <ForkKnife size={40} weight="bold" />
        <IconTitle>Daily{"\n"}Diet</IconTitle>
      </Heading>
    </Container>
  );
}
