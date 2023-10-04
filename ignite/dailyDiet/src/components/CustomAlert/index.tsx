import { Modal, View } from "react-native";
import { Container, Content, Message } from "./styles";
import { Button } from "@components/Button";

export type Props = {    
    message: string
    visible: boolean
    onClose: () => void
    onRemove: () => void
}
export function CustomAlert({message, visible = false, onClose, onRemove}: Props) {    
    return (
        <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => onClose()}        
        >
        <Container>
            <Content>
            <Message>{message}</Message>
            <View 
            style={{
                flexDirection: "row",
                gap: 8,
              }}
            >
            <Button title="Cancelar" type="SECONDARY" onPress={onClose}/>
            <Button title="Sim, excluir" onPress={onRemove}/>
            </View>
            </Content>      
        </Container>
        </Modal>
    )
}