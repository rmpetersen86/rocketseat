import { TouchableOpacityProps } from "react-native"
import { Container, FilterStyleProps, Title } from "./styles"

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({title, isActivity = false, ...rest}: Props) {
    return (
        <Container 
        isActivity={isActivity}
        {...rest}
        >
            <Title>{title}</Title>
        </Container>
    )
}