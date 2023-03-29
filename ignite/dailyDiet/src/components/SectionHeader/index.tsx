import { Title } from "./styles";

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  return <Title>{title}</Title>;
}
