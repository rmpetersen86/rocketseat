import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles"
import { useState } from "react"

export type TaskProps = {
  name: string
  done?: boolean
  onRemove?: () => void
  onChange?: () => void
}

export function Task({ name, done, onRemove, onChange }: TaskProps) {
  const [focusedTrash, setFocusedTrash] = useState(false)
  const [focusedCheck, setIsFocusedCheck] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.checkboxWrapper}>
        <TouchableOpacity
          style={
            !done
              ? [
                  !focusedCheck
                    ? styles.checkbox
                    : [styles.checkbox, styles.checkboxActive],
                ]
              : [styles.checkbox, styles.checkboxChecked]
          }
          onPress={onChange}
          onPressIn={() => setIsFocusedCheck(true)}
          onPressOut={() => setIsFocusedCheck(false)}
        >
          {done && (
            <Ionicons
              name="checkmark-circle"
              size={18}
              color={!focusedCheck ? "#5E60CE" : "#8284FA"}
              style={{ position: "absolute" }}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={!done ? styles.name : [styles.name, styles.nameChecked]}>
        {name}
      </Text>
      <TouchableOpacity
        style={!focusedTrash ? styles.button : styles.buttonActive}
        onPress={onRemove}
        onPressIn={() => setFocusedTrash(true)}
        onPressOut={() => setFocusedTrash(false)}
      >
        <Ionicons
          name="trash-outline"
          style={!focusedTrash ? styles.buttonIcon : styles.buttonIconActive}
        />
      </TouchableOpacity>
    </View>
  )
}
