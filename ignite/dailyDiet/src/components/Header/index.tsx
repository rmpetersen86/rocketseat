import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
  showTitle?: boolean;
  title?: string;
};

export function Header({ showTitle = false, title }: Props) {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      {showTitle && <Title>{title}</Title>}
    </Container>
  );
}
