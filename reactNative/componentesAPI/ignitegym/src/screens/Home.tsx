import { Group } from "@components/Group";
import { FlatList } from "react-native"
import { HomeHEader } from "@components/HomeHeader";
import { Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";


export function Home() {
  const [groups, setGroups] = useState(["Costas", "Bíceps", "Triceps", "Ombros"])
  const [groupSelected, setGroupSelected] = useState("costas")
  return (
    <VStack flex={1}>
      <HomeHEader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group name={item} isActive={groupSelected === item} onPress={() => setGroupSelected(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
      <VStack px="$8">
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}