import { Button } from "@components/Button";
import { Percent } from "@components/Percent";
import { SectionHeader } from "@components/SectionHeader";
import { SectionItem } from "@components/SectionItem";
import { ForkKnife } from "phosphor-react-native";
import { Image, SectionList, Text, View } from "react-native";
import {
  AppIcon,
  Avatar,
  Container,
  ContentTitle,
  Heading,
  IconTitle,
} from "./styles";

export function Home() {
  const DATA = [
    {
      title: "29.03.2023",
      data: [
        "X-tudo",
        "whey com leite",
        "Salada do chef",
        "Pastel com caldo de cana",
      ],
    },
    {
      title: "28.03.2023",
      data: ["Misto quente", "Escondidinho com arroz e feijão", "Banana"],
    },
  ];
  return (
    <Container>
      <Heading>
        <AppIcon>
          <ForkKnife size={40} weight="bold" />
          <IconTitle>Daily{"\n"}Diet</IconTitle>
        </AppIcon>
        <Avatar>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: "https://github.com/rmpetersen86.png" }}
          />
        </Avatar>
      </Heading>
      <Percent />
      <ContentTitle>Refeições</ContentTitle>
      <Button title="Nova refeição" iconName="Plus" />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <SectionItem />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </Container>
  );
}
