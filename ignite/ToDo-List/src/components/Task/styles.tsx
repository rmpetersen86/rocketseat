import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },

  checkboxWrapper: {
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  checkbox: {
    height: 17,
    width: 17,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 50,
  },

  checkboxActive: {
    borderColor: "#1E6F9F",
    backgroundColor: "#1E6F9F20",
  },

  checkboxChecked: {
    height: 18,
    width: 18,
    borderWidth: 0,
  },

  name: {
    color: "#F2F2F2",
    fontSize: 16,
    maxWidth: 235,
  },

  nameChecked: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  button: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIcon: {
    color: "#808080",
    fontSize: 14,
  },

  buttonActive: {
    height: 32,
    width: 32,
    backgroundColor: "#333333",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIconActive: {
    color: "#E25858",
    fontSize: 14,
  },
})
