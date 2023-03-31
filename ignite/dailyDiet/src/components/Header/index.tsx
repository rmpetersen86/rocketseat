import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
  title?: string;
};

export function Header({ title }: Props) {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      {title && <Title>{title}</Title>}
    </Container>
  );
}
