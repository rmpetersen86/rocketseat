import { DataInfo } from "@components/DataInfo";
import { Percent } from "@components/Percent";
import { View } from "react-native";
import { Container, Content, ContentHeading } from "./styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  totalMeals: number
  mealsOnDiet: number  
  mealStrike: number
}

export function Statistics() {
  
  const route = useRoute()
  const {totalMeals, mealsOnDiet, mealStrike} = route.params as RouteParams  

  return (
    <Container>
      <Percent total={(mealsOnDiet/totalMeals)*100} type="HEADER" />
      <Content>
        <ContentHeading>Estatísticas gerais</ContentHeading>
        <DataInfo
          dataNumber={mealStrike}
          caption={"melhor sequência de pratos dentro da dieta"}
        />
        <DataInfo dataNumber={totalMeals} caption={"refeições registradas"} />
        <View style={{ width: 167, flexDirection: "row", gap: 12 }}>
          <DataInfo
            dataNumber={mealsOnDiet}
            type={"POSITIVE"}
            caption={"refeições dentro da dieta"}
          />
          <DataInfo
            dataNumber={(totalMeals - mealsOnDiet)}
            type={"NEGATIVE"}
            caption={"refeições fora da dieta"}
          />
        </View>
      </Content>
    </Container>
  );
}
