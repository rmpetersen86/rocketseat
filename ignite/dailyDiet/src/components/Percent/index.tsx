import {
  Container,
  ForwardButton,
  ForwardIcon,
  Percentage,
  Subtitle,
} from "./styles";

export function Percent() {
  return (
    <Container>
      <ForwardButton>
        <ForwardIcon />
      </ForwardButton>
      <Percentage>65,2%</Percentage>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
