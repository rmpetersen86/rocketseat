import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight/indext";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
