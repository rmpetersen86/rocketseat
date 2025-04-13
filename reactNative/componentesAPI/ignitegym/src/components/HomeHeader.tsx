import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHEader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$8" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/rmpetersen86.png" }}
        alt="Imagem do usuário"
        h="$16"
        w="$16"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">Olá</Text>
        <Heading color="$gray100" fontSize="$md">
          Rafael Petersen
        </Heading>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}