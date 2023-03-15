import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  top: {
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    height: "100%",
    backgroundColor: "#1A1A1A",
    padding: 24,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -54,
  },

  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 5,
    padding: 16,
    color: "#F2F2F2",
    fontSize: 16,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    marginRight: 4,
  },

  inputFocused: {
    borderColor: "#5E60CE",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
  },

  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },

  resultWrap: {
    flexDirection: "row",
  },

  created: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4EA8DE",
  },
  finished: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8284FA",
  },

  countResult: {
    marginLeft: 8,
    width: 25,
    textAlign: "center",
    color: "#D9D9D9",
    backgroundColor: "#333333",
    borderRadius: 50,
  },

  tasks: {
    height: "100%",
    alignItems: "center",
    borderColor: "#333333",
    borderTopWidth: 1,
    paddingTop: 48,
    paddingVertical: 20,
  },

  tasksEmptyImg: {
    height: 56,
    width: 56,
    marginBottom: 16,
  },

  tasksEmptyTop: {
    color: "#808080",
    fontWeight: "700",
    lineHeight: 20,
  },

  tasksEmpty: {
    color: "#808080",
    lineHeight: 20,
  },
})
