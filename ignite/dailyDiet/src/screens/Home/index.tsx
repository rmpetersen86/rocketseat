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
        { hour: "07:00", description: "X-tudo", onDiet: false },
        { hour: "12:30", description: "Salada do chef", onDiet: true },
        { hour: "15:30", description: "whey com leite", onDiet: true },
        {
          hour: "17:30",
          description: "Pastel com caldo de cana",
          onDiet: false,
        },
        {
          hour: "20:30",
          description: "Ovo cozido com queijo branco e tabule",
          onDiet: true,
        },
      ],
    },
    {
      title: "28.03.2023",
      data: [
        { hour: "07:30", description: "Misto Quente", onDiet: false },
        {
          hour: "12:00",
          description: "Escondidinho com arroz e feijão",
          onDiet: false,
        },
        { hour: "13:00", description: "Banana", onDiet: true },
      ],
    },
    {
      title: "27.03.2023",
      data: [
        {
          hour: "07:00",
          description: "2 fatias de pão integral com queijo minas",
          onDiet: true,
        },
        {
          hour: "12:00",
          description: "Frango com batata doce e arroz integral",
          onDiet: true,
        },
        {
          hour: "15:00",
          description: "Banana com granola e mel",
          onDiet: true,
        },
      ],
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
      <Percent total={62.5} />
      <ContentTitle>Refeições</ContentTitle>
      <Button title="Nova refeição" iconName="Plus" />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <SectionItem
            hour={item.hour}
            description={item.description}
            isOnDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={250}
        contentContainerStyle={[
          { paddingBottom: 100 },
          DATA.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
