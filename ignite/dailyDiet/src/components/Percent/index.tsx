import {
  BackButton,
  BackIcon,
  Container,
  ForwardButton,
  ForwardIcon,
  Percentage,
  PercentTypeStyleProps,
  Subtitle,
} from "./styles";

type Props = {
  type?: PercentTypeStyleProps;
  total: number;
};

export function Percent({ total, type = "WIDGET" }: Props) {
  return (
    <Container type={type}>
      {type === "WIDGET" ? (
        <ForwardButton>
          <ForwardIcon />
        </ForwardButton>
      ) : (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Percentage>{total}%</Percentage>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
