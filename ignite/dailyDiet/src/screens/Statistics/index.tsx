import { DataInfo } from "@components/DataInfo";
import { Percent } from "@components/Percent";
import { View } from "react-native";
import { Container, Content, ContentHeading } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Percent total={62.5} type="HEADER" />
      <Content>
        <ContentHeading>Estatísticas gerais</ContentHeading>
        <DataInfo
          dataNumber={18}
          caption={"melhor sequência de pratos dentro da dieta"}
        />
        <DataInfo dataNumber={60} caption={"refeições registradas"} />
        <View style={{ width: 167, flexDirection: "row", gap: 12 }}>
          <DataInfo
            dataNumber={18}
            type={"POSITIVE"}
            caption={"refeições dentro da dieta"}
          />
          <DataInfo
            dataNumber={6}
            type={"NEGATIVE"}
            caption={"refeições fora da dieta"}
          />
        </View>
      </Content>
    </Container>
  );
}
