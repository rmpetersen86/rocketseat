import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";

export type TaskProps = {
  name: string;
  done?: boolean;
  onRemove?: () => void;
  checkTask?: () => void;
};

export function Task({ name, done, onRemove, checkTask }: TaskProps) {
  //const [checked, setIsChecked] = useState(false);
  /* const [focusedTask, setFocusedTask] = useState(false); */
  const [focusedTrash, setFocusedTrash] = useState(false);

  /* function onFocusTask() {
    setFocusedTask(!focusedTask);
  } */

  /* function checkTask() {
    setIsChecked(!checked);
  } */
  return (
    <View style={styles.container}>
      <View style={styles.checkboxWrapper}>
        <TouchableOpacity
          style={
            !done ? styles.checkbox : [styles.checkbox, styles.checkboxChecked]
          }
          onPress={checkTask}
          activeOpacity={0.2}
        >
          {done && (
            <Ionicons
              name="checkmark-circle"
              size={18}
              color="#5E60CE"
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
  );
}
