import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles"
import { useState } from "react"

type Props = {
  name: string
  onRemove: () => void
}

export function Task({ name, onRemove }: Props) {
  const [checked, setIsChecked] = useState(false)
  const [focusedTask, setFocusedTask] = useState(false)
  const [focusedTrash, setFocusedTrash] = useState(false)

  function onFocusTask() {
    setFocusedTask(!focusedTask)
  }

  function checkTask() {
    setIsChecked(!checked)
  }
  return (
    <View style={styles.container}>
      <View style={styles.checkboxWrapper}>
        <TouchableOpacity
          style={
            !checked
              ? styles.checkbox
              : [styles.checkbox, styles.checkboxChecked]
          }
          onPress={checkTask}
        >
          {checked && (
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#5E60CE"
              style={{ position: "absolute" }}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={!checked ? styles.name : [styles.name, styles.nameChecked]}
        onPress={onFocusTask}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={!focusedTrash ? styles.button : styles.buttonActive}
        onPress={onRemove}
      >
        <Ionicons
          name="trash-outline"
          style={!focusedTrash ? styles.buttonIcon : styles.buttonIconActive}
        />
      </TouchableOpacity>
    </View>
  )
}
