import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Container, Form, Label } from "./styles";
import { Content } from "@screens/Statistics/styles";
import { View } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { Button } from "@components/Button";

export function NewMeal() {
  const [onDietOption, setOnDietOption] = useState("");
  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <Form>
          <Input label="Nome" />
          <Input
            label="Descrição"
            type={"TEXTAREA"}
            textAlignVertical={"top"}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 24,
            }}
          >
            <Input label="Data" />
            <Input label="Hora" />
          </View>
          <Label>Está dentro da dieta?</Label>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
            }}
          >
            {[{ value: "Sim" }, { value: "Não" }].map((item) => {
              return (
                <Filter
                  key={item.value}
                  title={item.value as any}
                  onPress={() => setOnDietOption(item.value)}
                  isActivity={item.value === onDietOption}
                />
              );
            })}
          </View>
        </Form>
        <Button title="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
