import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          w="$full"
          h={624}
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e seu corpo
            </Text>
          </Center>
          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input
              placeholder="Nome"
            />

            <Input
              keyboardType="email-address"
              placeholder="E-mail"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              secureTextEntry
            />

            <Button
              title="Criar e acessar"
            />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt="$12" onPress={handleGoBack} />

        </VStack>
      </VStack>
    </ScrollView>
  )
}