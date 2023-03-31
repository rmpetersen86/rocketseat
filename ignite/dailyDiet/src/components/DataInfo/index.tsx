import {
  Caption,
  Container,
  DataInfoTypeStyleProps,
  DataNumber,
} from "./styles";

type Props = {
  type?: DataInfoTypeStyleProps;
  dataNumber: number;
  caption: string;
};

export function DataInfo({ type = "REGULAR", dataNumber, caption }: Props) {
  return (
    <Container type={type}>
      <DataNumber>{dataNumber}</DataNumber>
      <Caption>{caption}</Caption>
    </Container>
  );
}
