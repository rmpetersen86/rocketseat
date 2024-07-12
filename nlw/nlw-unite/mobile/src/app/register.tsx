import { Input } from "@/components/input";
import { View, Image, StatusBar, Alert } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link, router } from "expo-router";
import { useState } from "react";
import { api } from "@/server/api";
import axios from "axios";
import { useBadgeStore } from "@/store/badge-store";

const EVENT_ID = "99128243-88bf-4a87-84c8-ff1eb6eee8a0"

export default function Register(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const badgeStore = useBadgeStore()
  
  async function handleRegister(){
    try{
      if(!name.trim()){
        return Alert.alert("Nome", "Informe seu Nome!")
      }
      if(!email.trim()){
        return Alert.alert("Email", "Informe seu endereço de Email!")
      }
      setIsLoading(true)
      const registerResponse = await api.post(`/events/${EVENT_ID}/atendees`, {name, email})      
      if(registerResponse.data.atendeeId){
        const badgeResponse = await api.get(`/atendees/${registerResponse.data.atendeeId}/badge`)
        badgeStore.save(badgeResponse.data.badge)
        Alert.alert("Inscrição","A inscrição foi realizada com sucesso!", 
          [
            {text: "OK", onPress: () => router.push("/ticket")}
          ]
        )
      }      
    }catch(error){
      console.log(error)
      setIsLoading(false)
      if(axios.isAxiosError(error)){        
        if(String(error.response?.data.message).includes("já está cadastrado")){
          return Alert.alert("Inscrição", "Este e-mail já está cadastrado.")
        }
      }
      Alert.alert("Inscrição", "Não foi possível realizar a inscrição!")
    }finally{
      setIsLoading(false)
    }
  }
  
  return (
    <View className="flex flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <Image source={require('@/assets/logo.png')} className="h-16" resizeMode="contain"/>
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome name="user-circle" size={20} color={colors.green[200]}/>
          <Input.Field 
          placeholder="Nome Completo"
          onChangeText={(value) => setName(value)}
          />
        </Input>
        <Input>
          <MaterialIcons name="alternate-email" size={20} color={colors.green[200]}/>
          <Input.Field 
            placeholder="E-mail" 
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            />
        </Input>
        <Button title="Realizar Inscrição" onPress={handleRegister} isLoading={isLoading}/>
        <Link href={"/"} className="text-gray-100 text-base font-bold text-center mt-8">
          Já possúi ingresso?
        </Link>
      </View>
    </View>
  )
}