import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from "@components/input"
import { Button } from "@components/button"

export function SignUp(){
  return(     
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <VStack flex={1} bg="gray.700" px={10} pb={16}>
    <Image
        source={BackgroundImg}
        alt="Pessoas treinando"         
        position="absolute"
        alignSelf="center"
        resizeMode="contain"        
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Crie sua conta
        </Heading>
        <Input 
          placeholder="Nome"         
        />
        <Input 
          placeholder="E-mail"
          keyboardType="email-address"
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
      <Button 
          title="Voltar para o login"
          variant="outline"
          mt={24}
        />      
    </VStack>
    </ScrollView>    
  )
}