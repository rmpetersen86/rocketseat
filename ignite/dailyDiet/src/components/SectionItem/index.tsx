import { useTheme } from "styled-components/native"
import { Container, Description, Hour, OnDiet, Separator } from "./styles"

type Props = {
  hour: string
  description: string
  isOnDiet: boolean
}

export function SectionItem({ hour, description, isOnDiet = false }: Props) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Separator />
      <Description numberOfLines={1}>{description}</Description>
      <OnDiet color={isOnDiet ? COLORS.GREEN_MID : COLORS.RED_MID} />
    </Container>
  )
}
